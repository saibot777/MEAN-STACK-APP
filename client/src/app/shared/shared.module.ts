import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule {}
