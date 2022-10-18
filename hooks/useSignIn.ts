import { AuthError } from '@supabase/supabase-js';
import { useState } from 'react';

import supabase from '../supabase';

interface State {
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string | null;
}

interface HandleLogin {
  (email: string): Promise<void>;
}

interface HandleClearError {
  (): void;
}

interface HandleClearSuccess {
  (): void;
}

type ReturnType = [
  State,
  {
    handleLogin: HandleLogin;
    clearError: HandleClearError;
    clearSuccess: HandleClearSuccess;
  }
];

function useSignIn(): ReturnType {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);

      const { error } = await supabase.auth.signInWithOtp({ email });

      if (error) {
        throw error;
      }

      setSuccess(true);
    } catch (error) {
      if (error instanceof Error || error instanceof AuthError) {
        setErrorMessage(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setErrorMessage(null);
  };

  const clearSuccess = () => {
    setSuccess(false);
  };

  return [
    { isLoading, isSuccess, errorMessage },
    { handleLogin, clearError, clearSuccess },
  ];
}

export default useSignIn;
