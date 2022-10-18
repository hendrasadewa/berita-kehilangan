import { useForm, SubmitHandler } from 'react-hook-form';
import { clsx } from 'clsx';

interface Props {
  errorMessage: string | null;
  isLoading: boolean;
  onSubmit: (email: string) => void;
}

interface FormPayload {
  email: string;
}

function SignInForm({ errorMessage, isLoading, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormPayload>();

  const onFormSubmit: SubmitHandler<FormPayload> = (payload) => {
    onSubmit(payload.email);
  };

  const buttonClassName = clsx('btn', 'mt-2', 'btn-md', { loading: isLoading });

  return (
    <div className="w-96">
      <div>
        <h2 className="font-bold text-2xl text-center mb-8">Sign In</h2>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-control w-full">
          <label className="label" htmlFor="emailInput">
            <span className="label-text">Email Address</span>
          </label>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="nama@host.com"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <button
            className={buttonClassName}
            type="submit"
            disabled={isLoading}
          >
            Sign In with Magic Link
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
