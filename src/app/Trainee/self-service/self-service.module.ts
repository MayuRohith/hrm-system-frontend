import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { SelfServiceComponent } from './self-service.component';
import { FormComplaintComponent } from './form-complaint/form-complaint.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { TableEmpComplainHistoryComponent } from './table-emp-complain-history/table-emp-complain-history.component';

const routes:Routes=[
  {
    path:'',
    component:SelfServiceComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SelfServiceComponent, 
    FormComplaintComponent, TableEmpComplainHistoryComponent
  ]
})
export class SelfServiceModule { }
