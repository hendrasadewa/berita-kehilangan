import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { SessionContext } from '../../components/SessionProvider';

// components
import SignInForm from '../../components/SignInForm';
import SignInSentView from '../../components/SignInSentView';
import useSignIn from '../../hooks/useSignIn';

const SignInPage: NextPage = () => {
  const [{ errorMessage, isLoading, isSuccess }, actions] = useSignIn();
  const { session } = useContext(SessionContext);
  const router = useRouter();

  if (session) {
    router.replace('/');
    return <div>Redirecting you to member area</div>;
  }

  return (
    <div>
      <Head>
        <title>Berita Kehilangan | Sign In</title>
        <meta name="description" content="Sign In untuk membuat laporan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="hero min-h-screen">
        <div className="hero-content">
          <div className="w-full max-w-screen-md">
            {isSuccess ? (
              <SignInSentView onRetry={actions.clearSuccess} />
            ) : (
              <SignInForm
                errorMessage={errorMessage}
                isLoading={isLoading}
                onSubmit={actions.handleLogin}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
