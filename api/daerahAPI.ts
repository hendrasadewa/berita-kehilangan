import axios from 'axios';

const BASE_URL = 'https://ibnux.github.io/data-indonesia';

export interface LocationItem {
  id: string;
  nama: string;
}

export enum LocationLevel {
  PROVINCE = 'province',
  CITY = 'city',
  DISTRICT = 'district',
  VILLAGE = 'village',
}

const daerahAPIInstance = axios.create({
  baseURL: BASE_URL,
});

function getByLevel(level: LocationLevel = LocationLevel.PROVINCE, id?: string) {
  switch (level) {
    case LocationLevel.VILLAGE:
      return daerahAPIInstance.get(`/kelurahan/${id}.json`);
    case LocationLevel.DISTRICT:
      return daerahAPIInstance.get(`/kecamatan/${id}.json`);
    case LocationLevel.CITY:
      return daerahAPIInstance.get(`/kabupaten/${id}.json`);
    case LocationLevel.PROVINCE:
    default:
      return daerahAPIInstance.get('/provinsi.json');
  }
}

const daerahAPI = {
  getByLevel,
};

export default daerahAPI;
