import React from 'react';
import { useDolphy } from '../context/DolphyContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useDolphy();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-fade-in-up">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0f3e66] text-white shadow-2xl border border-[#FAEA28]/40">
        <CheckCircle2 className="text-[#FAEA28] shrink-0" size={20} />
        <span className="text-sm font-medium">{toast}</span>
      </div>
    </div>
  );
};
