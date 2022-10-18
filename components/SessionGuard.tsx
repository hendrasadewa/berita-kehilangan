import { useRouter } from 'next/router';
import { ReactNode, useContext } from 'react';
import { SessionContext } from './SessionProvider';

interface Props {
  children: ReactNode;
}

function SessionGuard({ children }: Props) {
  const { session } = useContext(SessionContext);
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <span className="text-2xl font-bold mb-4">Forbidden Access</span>
        <p className="font-mono">You should sign in before visit this page.</p>
        <button className="btn btn-sm mt-4" onClick={handleBackClick}>
          Go Back
        </button>
      </div>
    );
  }

  return <>{children}</>;
}

export default SessionGuard;
