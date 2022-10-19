import clsx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SkinHex } from '../supabase/constants/PersonConstants';
import { Genders, SkinShades } from '../supabase/types/LostPersonTypes';

export interface FormPayload {
  fullname: string;
  descriptions: string;
  age: number;
  gender?: Genders;
  dateOfBirth?: Date;
  skinColor?: SkinShades;
}

interface Props {
  onSubmit: (payload: FormPayload) => void;
}

function PersonInfoForm({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormPayload>();

  const onFormSubmit: SubmitHandler<FormPayload> = (payload) => {
    onSubmit(payload);
    console.log(payload);
  };

  const skinOptions = Object.values(SkinShades).map((shades) => ({
    value: shades,
    color: SkinHex[shades],
  }));

  const genderOptions = Object.values(Genders).map((gender) => ({
    value: gender,
  }));

  const buttonClassName = clsx('btn', 'mt-2', 'btn-md');

  return (
    <div className="w-96">
      <div>
        <h2 className="font-bold text-2xl text-center mb-8">Post Report</h2>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-control">
          <label className="label" htmlFor="fullnameInput">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register('fullname', { required: true })}
            type="text"
            placeholder="Fullname, birth name, or nickname"
            className="input input-bordered w-full"
            id="fullnameInput"
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="fullnameInput">
            <span className="label-text">Date of Birth</span>
          </label>
          <input
            {...register('dateOfBirth', { required: false })}
            type="date"
            placeholder="birthday"
            className="input input-bordered w-full"
            id="fullnameInput"
          />
          <label className="label" htmlFor="fullnameInput">
            <span className="label-text">*this field is optional</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label" htmlFor="fullnameInput">
            <span className="label-text">Age</span>
          </label>
          <input
            {...register('age', { required: true })}
            type="number"
            placeholder="Age or can be approximate age"
            className="input input-bordered w-full"
            id="fullnameInput"
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="fullnameInput">
            <span className="label-text">Gender</span>
          </label>
          <div>
            {genderOptions.map(({ value }) => (
              <div
                className="form-control border rounded-md mb-2 p-2"
                key={value}
              >
                <label className="label cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span className="label-text capitalize">{value}</span>
                  </div>
                  <input
                    type="radio"
                    className="radio"
                    value={value}
                    {...register('gender')}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-control">
          <label className="label" htmlFor="fullnameInput">
            <span className="label-text">Skin Color</span>
          </label>
          <div>
            {skinOptions.map(({ value, color }) => (
              <div
                className="form-control border rounded-md mb-2 p-2"
                key={value}
              >
                <label className="label cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-4 w-4 rounded-md"
                      style={{ backgroundColor: color }}
                    />
                    <span className="label-text capitalize">
                      {value.split('-').join(' ')} {''} Skin Color
                    </span>
                  </div>
                  <input
                    type="radio"
                    className="radio"
                    value={value}
                    {...register('skinColor')}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-control">
          <label className="label" htmlFor="fullnameInput">
            <span className="label-text">Descriptions</span>
          </label>
          <textarea
            {...register('descriptions', { required: true })}
            placeholder="Person characteristics, like birthmarks, mole, habits, last clothing"
            className="textarea textarea-bordered w-full h-32"
            id="fullnameInput"
          />
          <label className="label" htmlFor="fullnameInput">
            <span className="label-text">
              More detailed descriptions will help us easier to find a missing
              person
            </span>
          </label>
        </div>

        <div className="form-control w-full">
          <button className={buttonClassName} type="submit">
            Submit Person Info
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonInfoForm;