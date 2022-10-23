import { SubmitHandler, useForm } from 'react-hook-form';

interface FormPayload {
  date: Date;
}

function TimePickerForm() {
  const { register, handleSubmit } = useForm<FormPayload>();

  const onFormSubmit: SubmitHandler<FormPayload> = (payload) => {

  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Time</span>
        </label>
        <input
          type="date"
          placeholder="Location name, a restaurant name, mall name"
          className="input input-bordered w-full"
          {...register('date', { required: true })}
        />
      </div>
    </form>
  );
}

export default TimePickerForm;