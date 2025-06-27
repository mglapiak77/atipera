import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Periodic } from 'src/app/types/Periodic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemMessages } from 'src/app/constants/SystemMessages';

@Component({
  selector: 'app-edit-periodic',
  templateUrl: './edit-periodic.component.html',
  standalone: false,
})
export class EditPeriodicComponent implements OnInit {
  public form!: FormGroup;
  public systemMessages = SystemMessages;

  constructor(
    public dialogRef: MatDialogRef<EditPeriodicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Periodic,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.createForm();
  }

  public save(): void {
    if (this?.form?.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  public cancel(): void {
    this.dialogRef.close(null);
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      position: [this.data?.position],
      name: [this.data?.name, Validators.required],
      weight: [this.data?.weight, Validators.required],
      symbol: [this.data?.symbol, Validators.required],
    });
  }
}
