import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';

import type { ToastData, ToastMessage } from '@/types/toast';

import { ToastContext } from '@/context/toast';

import Toast from '@/components/progress-toast';

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastData | null>(null);

  const addToast = (message: string, type: ToastMessage, duration: number = 5000) => {
    const newToast = { id: Date.now(), message, type, duration };
    setToast(newToast);
  };

  const removeToast = (id: number) => {
    if (toast && toast.id === id) {
      setToast(null);
    }
  };
  const contextValue = useMemo(() => ({ addToast }), []);
  return (
    <ToastContext.Provider value={contextValue}>
      <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto', minHeight: '100vh' }}>
        {children}
        <div
          style={{
            position: 'fixed',
            left: '16px',
            bottom: '70px',
            zIndex: 1000,
          }}
        >
          {toast && <Toast key={toast.id} id={toast.id} message={toast.message} type={toast.type} duration={toast.duration} onClose={removeToast} />}
        </div>
      </div>
    </ToastContext.Provider>
  );
}
