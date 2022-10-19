export interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface Location {
  name: string;
  descriptions?: string;
  provinceId?: string;
  provinceName?: string;
  cityId?: number;
  cityName?: string;
  regencyId?: number;
  regencyName?: string;
  villageId?: number;
  villageName?: string;
  coordinates?: Coordinates
}