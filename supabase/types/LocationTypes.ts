export interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface Location {
  name: string;
  descriptions?: string;
  provinceId?: string;
  provinceName?: string;
  cityId?: string;
  cityName?: string;
  districtId?: string;
  districtName?: string;
  villageId?: string;
  villageName?: string;
  coordinates?: Coordinates
}