import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpProfile } from '../emp-profile/emp-profile';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

 
  employees: EmpProfile[] = [
    {
      empName: 'john',
      empId: 1,
      gender: 'male',
      email: 'john11@gmail',
      contactNo: '0777725654',
      address: 'jaffna',
      appointDate: new Date('10/02/2018'),
      role: 'accountant',
      photoPath: '../../../../../../assets/images/john.jfif',
      nationality: 'Srilankan Tamil',
      nic: '921961464v',
      religion: 'Hindu',
      dateOfBirth: new Date('12/02/2018'),
      addressR: 'jaffna',
      contactNoR: '0212222456',
      maritalStatus: 'Single',
      basicSalary: '40000',
    }
  ]
  

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoNext() {
    this.router.navigate(['/profile/academicQual']);
  }
  goBack() {
    this.router.navigate(['/profile/empprofile']);
  }

}
