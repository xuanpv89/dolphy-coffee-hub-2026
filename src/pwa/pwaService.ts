// PWA Service Manager for Dolphy Café & Academy
export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

class PwaService {
  private deferredPrompt: BeforeInstallPromptEvent | null = null;
  private isInstalled: boolean = false;
  private isOnline: boolean = typeof navigator !== 'undefined' ? navigator.onLine : true;
  private hasUpdate: boolean = false;
  private waitingWorker: ServiceWorker | null = null;
  private listeners: Set<() => void> = new Set();

  constructor() {
    if (typeof window === 'undefined') return;

    // Detect standalone mode
    this.isInstalled =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true ||
      document.referrer.includes('android-app://');

    // Listen for install prompt
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      this.deferredPrompt = e as BeforeInstallPromptEvent;
      this.notify();
    });

    // Listen for successful installation
    window.addEventListener('appinstalled', () => {
      this.isInstalled = true;
      this.deferredPrompt = null;
      this.notify();
      console.log('[Dolphy PWA] App was successfully installed!');
    });

    // Network connectivity listeners
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.notify();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.notify();
    });
  }

  // Register Service Worker
  public registerServiceWorker(onUpdateAvailable?: () => void) {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('[Dolphy PWA] Service Worker registered successfully:', registration.scope);

          // Check for waiting updates
          if (registration.waiting) {
            this.hasUpdate = true;
            this.waitingWorker = registration.waiting;
            this.notify();
            if (onUpdateAvailable) onUpdateAvailable();
          }

          // Listen for new worker installing
          registration.addEventListener('updatefound', () => {
            const installingWorker = registration.installing;
            if (!installingWorker) return;

            installingWorker.addEventListener('statechange', () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // New update is available
                  this.hasUpdate = true;
                  this.waitingWorker = installingWorker;
                  this.notify();
                  if (onUpdateAvailable) onUpdateAvailable();
                } else {
                  console.log('[Dolphy PWA] Content is cached for offline use.');
                }
              }
            });
          });
        })
        .catch((error) => {
          console.error('[Dolphy PWA] Service Worker registration failed:', error);
        });

      // Reload page when new service worker takes over
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    });
  }

  // Trigger browser install prompt
  public async promptInstall(): Promise<boolean> {
    if (!this.deferredPrompt) {
      return false;
    }

    try {
      await this.deferredPrompt.prompt();
      const choice = await this.deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        this.deferredPrompt = null;
        this.notify();
        return true;
      }
      return false;
    } catch (err) {
      console.error('[Dolphy PWA] Install prompt error:', err);
      return false;
    }
  }

  // Apply service worker update
  public applyUpdate() {
    if (this.waitingWorker) {
      this.waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  }

  // Subscriptions
  public subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  // Getters
  public getCanInstall(): boolean {
    return !!this.deferredPrompt && !this.isInstalled;
  }

  public getIsInstalled(): boolean {
    return this.isInstalled;
  }

  public getIsOnline(): boolean {
    return this.isOnline;
  }

  public getHasUpdate(): boolean {
    return this.hasUpdate;
  }

  public isIOS(): boolean {
    if (typeof window === 'undefined') return false;
    const ua = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(ua) && !(window as any).MSStream;
  }
}

export const pwaService = new PwaService();
