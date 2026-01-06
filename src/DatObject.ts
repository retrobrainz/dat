export interface DatEntry {
  $class: string;
  $entries?: DatEntry[];
  [key: string]: any;
}
