import { Periodic } from "./Periodic";

export interface PeriodicsState {
  periodics: Periodic[];
  isLoading: boolean;
  filter: string;
}
