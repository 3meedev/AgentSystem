import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderdetailPage } from './orderdetail.page';
import { ComponentsModule } from '../component.module';

const routes: Routes = [
  {
    path: '',
    component: OrderdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderdetailPage]
})
export class OrderdetailPageModule {}
