import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexModule } from './index/index.module';

@NgModule({
  imports: [
    CommonModule,
    IndexModule,
  ],
  exports: [
    IndexModule
  ]
})
export class PagesModule { }
