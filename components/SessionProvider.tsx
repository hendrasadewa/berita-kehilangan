import { Session } from '@supabase/supabase-js';
import { createContext, ReactNode } from 'react';
import useSessionState from '../hooks/useSessionState';

interface Props {
  children: ReactNode;
}

interface ContextValues {
  session: Session | null;
  isLoading: boolean;
}

const ContextInitialValues: ContextValues = {
  session: null,
  isLoading: false,
};

export const SessionContext =
  createContext<ContextValues>(ContextInitialValues);

function SessionProvider({ children }: Props) {
  const [{ isLoading, session, errorMessage }] = useSessionState();

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <span>Authenticating...</span>
        <progress className="progress w-56" />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <span className="text-2xl">Session error occurred</span>
        <p className="font-mono">{errorMessage}</p>
      </div>
    );
  }

  return (
    <SessionContext.Provider value={{ session, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
