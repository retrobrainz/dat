export interface DatOptions {
  lastNameUpperCase?: boolean;
}

export function dat(firstName: string, lastName: string, options?: DatOptions) {
  if (options?.lastNameUpperCase) {
    return `${firstName} ${lastName.toLocaleUpperCase()}`;
  }
  return `${firstName} ${lastName}`;
}
