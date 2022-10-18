interface Props {
  onRetry: () => void;
}

function SignInSentView({ onRetry }: Props) {
  return (
    <div>
      <div className="flex justify-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-center"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
          />
        </svg>
      </div>
      <h2 className="text-xl text-center font-bold mt-4">Check Your Email</h2>
      <p className="text-lg text-center mt-2">
        We sent an email to you, it has magic link that will log you in.
      </p>
      <p className="text-sm text-center mt-6">
        If you have not received an email after a minute,{' '}
        <a className="link" onClick={onRetry}>
          click here to try again
        </a>
      </p>
    </div>
  );
}

export default SignInSentView;
