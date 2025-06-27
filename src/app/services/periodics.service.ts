import { Injectable, inject, Signal } from '@angular/core';
import { PeriodicsStore } from '../stores/periodics.store';
import { Periodic } from '../types/Periodic';

@Injectable({ providedIn: 'root' })
export class PeriodicsService {
  private readonly store = inject(PeriodicsStore);
  public readonly filteredPeriodics = this.store.getPeriodicsSignal();

  public setFilter(filter: string): Signal<Periodic[]> {
    return this.store.filterPeriodics(filter);
  }

  public updatePeriodic(periodic: Periodic): void {
    this.store.editPeriodic(periodic);
  }
}
