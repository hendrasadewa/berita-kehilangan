import { AuthError, Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import supabase from '../supabase';

interface State {
  session: Session | null;
  isLoading: boolean;
  errorMessage: string | null;
}

interface Actions {
  logout: () => Promise<void>;
  clearError: () => void;
}

type ReturnType = [State, Actions];

function useSessionState(): ReturnType {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function getInitialSession() {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        // only update the react state if the component is still mounted
        if (!mounted) {
          // do nothing
          return;
        }

        if (error) {
          throw error;
        }

        if (session) {
          setSession(session);
        }
      } catch (error) {
        if (error instanceof Error || error instanceof AuthError) {
          setErrorMessage(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    getInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, updatedSession) => {
      setSession(updatedSession);
    });

    return () => {
      mounted = false;

      subscription?.unsubscribe();
    };
  }, []);

  const logout = async () => {
    try {
      setLoading(true);
      const response = await supabase.auth.signOut();
      if (response.error) {
        throw response.error;
      }
      setSession(null);
    } catch (error) {
      setSession(null);
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setErrorMessage(null);
  };

  const state = { errorMessage, isLoading, session };
  const actions = { clearError, logout };

  return [state, actions];
}

export default useSessionState;
