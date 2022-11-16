import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  emp_name: any;
  emp_gender: any;
  email: any;
  contact_number: any;
  home_add: any;


  constructor(public _apiService: ApiService) {}

  //Function for creating student record
  addStudent() {
    //console.log(this.student_number, this.student_name, this.email);
    let data = {
      emp_name: this.emp_name,
      emp_gender: this.emp_gender,
      email: this.email,
      contact_number: this.contact_number,
      home_add: this.home_add
    }

    this._apiService.addStudent(data).subscribe((res: any) => {
      console.log("Success == ", res)
      this.emp_name = '';
      this.emp_gender = '';
      this.email = '';
      this.contact_number = '';
      this.home_add = '';
      alert("SUCCESS");
    }, (error: any) => {
      alert("ERROR")
      console.log("Error = ", error)
    });
  }

}
