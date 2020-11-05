import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    Ng2SmartTableModule,
    NbCardModule
  ]
})
export class CustomersModule { }
