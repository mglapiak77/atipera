import { Component, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
import { PeriodicsService } from 'src/app/services/periodics.service';
import { Periodic } from 'src/app/types/Periodic';
import { EditPeriodicComponent } from '../edit-periodic/edit-periodic.component';
import { PeriodicsStore } from 'src/app/stores/periodics.store';
import { SystemMessages } from 'src/app/constants/SystemMessages';

@Component({
  selector: 'app-periodics',
  templateUrl: './periodics.component.html',
  styleUrls: ['./periodics.component.scss'],
  providers: [PeriodicsStore],
  standalone: false,
})
export class PeriodicsComponent implements OnInit {
  public readonly displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  public periodics = this.periodicsService.filteredPeriodics;
  public filterControl = new FormControl('');
  public systemMessages = SystemMessages;
  
  private readonly store = inject(PeriodicsStore);

  constructor(
    private periodicsService: PeriodicsService,
    private dialog: MatDialog,
  ) {
    
  }

  public ngOnInit(): void {
    this.filterControl.valueChanges.pipe(debounceTime(2000)).subscribe((value: string | null) => {
      this.periodicsService.setFilter(value ?? '');
    })
  }

  public edit(periodic: Periodic): void {
    const dialogRef: MatDialogRef<EditPeriodicComponent> = this.dialog.open(EditPeriodicComponent, {
      width: '300px',
      data: periodic,
    });

    dialogRef.afterClosed().subscribe((periodic: Periodic) => {
      if (periodic) {
        this.periodicsService.updatePeriodic(periodic);
      }
    });
  }
}
