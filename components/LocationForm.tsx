import clsx from 'clsx';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LocationItem, LocationLevel } from '../api/daerahAPI';
import { Location } from '../supabase/types/LocationTypes';
import LocationSelectors from './LocationSelectors';

interface FormPayload {
  name: string;
  descriptions: string;
}

interface Props {
  onSubmit: (formData: Location) => void;
}

function LocationForm({ onSubmit }: Props) {
  const [location, setLocation] = useState<Partial<Location>>();
  const { register, handleSubmit } = useForm<FormPayload>();

  const handleLocationSelect = (
    payload: Record<LocationLevel, LocationItem | undefined>
  ) => {
    setLocation({
      provinceId: payload.province?.id,
      provinceName: payload.province?.nama,
      cityId: payload.city?.id,
      cityName: payload.city?.nama,
      districtId: payload.district?.id,
      districtName: payload.district?.nama,
      villageId: payload.village?.id,
      villageName: payload.village?.nama,
    });
  };

  const onFormSubmit: SubmitHandler<FormPayload> = (payload) => {
    const formData: Location = {
      ...location,
      name: payload.name,
      descriptions: payload.descriptions,
    };
    onSubmit(formData);
  };

  const buttonClassName = clsx('btn', 'mt-2', 'btn-md');

  return (
    <div>
      <h3 className="text-xl">Location Info</h3>
      <LocationSelectors onSelected={handleLocationSelect} />
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location Name</span>
          </label>
          <input
            type="text"
            placeholder="Location name, a restaurant name, mall name"
            className="input input-bordered w-full"
            {...register('name', { required: true })}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Location Descriptions</span>
          </label>
          <textarea
            placeholder="Specific location desriptions, restroom, rest area, etc."
            className="textarea textarea-bordered w-full"
            {...register('descriptions', { required: true })}
          />
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

export default LocationForm;
