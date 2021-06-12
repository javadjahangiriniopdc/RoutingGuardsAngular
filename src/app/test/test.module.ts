import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';



@NgModule({
  declarations: [
    TestComponent,
    Test2Component,
    Test3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [TestComponent,Test2Component,Test3Component],
})
export class TestModule { }
