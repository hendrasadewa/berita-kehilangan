import { useCallback, useEffect } from 'react';
import { useImmerReducer } from 'use-immer';

import { LocationItem, LocationLevel } from '../api/daerahAPI';
import reducer, { initialState } from '../reducers/locationReducer';
import { Location } from '../supabase/types/LocationTypes';
import LocationSelect from './LocationSelect';

interface Props {
  onSelected: (
    payload: Record<LocationLevel, LocationItem | undefined>
  ) => void;
}

function LocationSelectors({ onSelected }: Props) {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const handleSelectLocation = (
    level: LocationLevel,
    id: string,
    nama: string
  ) => {
    dispatch({
      type: 'select-location-item',
      payload: {
        level,
        id,
        nama,
      },
    });

    onSelected({
      ...state.location,
      [level]: { id, nama },
    });
  };

  return (
    <div className="w-full">
      <LocationSelect
        level={LocationLevel.PROVINCE}
        onChange={handleSelectLocation}
      />
      <LocationSelect
        level={LocationLevel.CITY}
        locationId={state.location.province?.id}
        onChange={handleSelectLocation}
      />
      <LocationSelect
        level={LocationLevel.DISTRICT}
        locationId={state.location.city?.id}
        onChange={handleSelectLocation}
      />
      <LocationSelect
        level={LocationLevel.VILLAGE}
        locationId={state.location.district?.id}
        onChange={handleSelectLocation}
      />
    </div>
  );
}

export default LocationSelectors;
