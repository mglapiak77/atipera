import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Periodic } from "../types/Periodic";
import { PeriodicsState } from "../types/PeriodicsState";
import { signal, Signal, WritableSignal } from "@angular/core";

const ELEMENT_DATA: Periodic[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
]

const initialState: PeriodicsState = {
  periodics: ELEMENT_DATA,
  isLoading: false,
  filter: '',
};

const periodicsSignal: WritableSignal<Periodic[]> = signal<Periodic[]>(ELEMENT_DATA);

export const PeriodicsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    editPeriodic(updatedPeriodic: Periodic): void {
      const updated: Periodic[] = store.periodics().map((p: Periodic) =>
        p.position === updatedPeriodic.position ? updatedPeriodic : p
      );

      patchState(store, { periodics: updated });
      periodicsSignal.set(updated);
    },

    filterPeriodics(filter: string): Signal<Periodic[]> {
      const normalizedFilter: string = filter.trim().toLowerCase();
      let periodics: Periodic[];

      if (!normalizedFilter) {
        periodics = ELEMENT_DATA;
      } else {
        periodics = ELEMENT_DATA.filter((periodic: Periodic) =>
          Object.values(periodic).some((value) =>
            String(value).toLowerCase().includes(normalizedFilter)
          )
        );
      }

      patchState(store, {
        periodics: periodics,
        filter: filter,
      });

      periodicsSignal.set(periodics);

      return periodicsSignal;
    },

    getAllPeriodics(): Periodic[] {
      return ELEMENT_DATA;
    },

    getPeriodicsSignal(): Signal<Periodic[]> {
      return periodicsSignal;
    }
  }))
);
