import { ChangeEvent, useEffect, useState } from 'react';
import daerahAPI, { LocationItem, LocationLevel } from '../api/daerahAPI';

interface Props {
  level: LocationLevel;
  locationId?: string;
  onChange: (level: LocationLevel, id: string, nama: string) => void;
}

function LocationSelect({ level, locationId, onChange }: Props) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [list, setList] = useState<LocationItem[]>([]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const [id, nama] = e.target.value.split('|')
    onChange(level, id, nama);
  };

  useEffect(() => {
    const getLocationList = async () => {
      try {
        setLoading(true);
        const response = await daerahAPI.getByLevel(level, locationId);
        setList(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    if (level === LocationLevel.PROVINCE || locationId) {
      getLocationList();
    }
  }, [locationId, level]);

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{level}</span>
      </label>
      <select
        className="select select-bordered w-full"
        name={level}
        disabled={
          isLoading || (level !== LocationLevel.PROVINCE && !locationId)
        }
        onChange={handleChange}
        defaultValue="default"
      >
        <option key={`location-default-${level}`} value="default" disabled>
          {isLoading ? `Loading ${level}` : `Choose ${level}`}
        </option>
        {list.map(({ id, nama }) => (
          <option key={id} value={`${id}|${nama}`}>
            {nama}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocationSelect;
