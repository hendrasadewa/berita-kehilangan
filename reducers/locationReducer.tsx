import { LocationItem, LocationLevel } from '../api/daerahAPI';

interface State {
  location: Record<LocationLevel, LocationItem | undefined>;
  isLoading: boolean;
}

type Action = {
  type: 'select-location-item';
  payload: { level: LocationLevel; id: string; nama: string };
};

export const initialState: State = {
  location: {
    province: undefined,
    city: undefined,
    district: undefined,
    village: undefined,
  },
  isLoading: false,
};

function reducer(draft: State, action: Action) {
  switch (action.type) {
    case 'select-location-item':
      draft.location[action.payload.level] = {
        id: action.payload.id,
        nama: action.payload.nama,
      };
      break;
  }
}

export default reducer;
