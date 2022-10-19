// Enumerations
export enum Genders {
  MALE='Male',
  FEMALE='Female',
  Others = 'Others',
}

export enum SkinShades {
  UNKNOWN = 'unknown',
  LIGHT = 'light',
  MEDIUM_LIGHT = 'medium-light',
  MEDIUM = 'medium',
  MEDIUM_DARK = 'medium-dark',
  DARK = 'dark',
}

// interfaces
export interface Person {
  fullname: string;
  descriptions: string;
  age: number;
  gender?: Genders;
  skinColor?: SkinShades;
}
