import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  emploeeInformation = [];
  model: any = {};
  fileData: any = 'Choose file';

  constructor() { }

  ngOnInit() {
    this.emploeeInformation = [
      { id: 1, Name: "Anoop Krishna", email: "anoop@gmail.com", Experience: "2 Years 3 Months" },
      { id: 2, Name: "Deepak Chopra", email: "deepak@gmail.com", Experience: "5 Years 4 Months" }
    ]
    // dialogbox will open
    window.onload = function () {
      var buttonFile = document.getElementById("buttonFile");
      var file = document.getElementById("file");

      buttonFile.onclick = function () {
        document.getElementById("file").click();
      }
    };
  }

  //  Suimit User Information
  onSubmit = (employeedata,f: NgForm) => {
    var dateOdJoing = new Date(employeedata.dateofjoining);
    var dateOdLeaving = new Date(employeedata.dateofleaving);

    var diff: any = new Date(
      dateOdLeaving.getFullYear() - dateOdJoing.getFullYear(),
      dateOdLeaving.getMonth() - dateOdJoing.getMonth(),
    );

    // Difference between Joining and Leaving Dates
    if (diff.getYear() > 0 && diff.getMonth() == 0) {
      var employeeExperience = diff.getYear() + " Years"
    } else if (diff.getYear() == 0 && diff.getMonth() > 0) {
      var employeeExperience = diff.getMonth() + " Months"
    } else if (diff.getYear() > 0 && diff.getMonth() > 0) {
      var employeeExperience = diff.getYear() + " Years " + diff.getMonth() + " Months"
    }

    var Id = this.emploeeInformation[this.emploeeInformation.length - 1].id + 1;
    console.log(Id);
    let data = {
      id: Id,
      Name: employeedata.Name,
      email: employeedata.email,
      Experience: employeeExperience

    }
    this.emploeeInformation.push(data);
    f.reset() 
  }

  //  Getting File Name
  getoutput(event) {
    this.fileData = event.target.files[0].name;
  }

  // Remove Employee Data from the table
  remove(id) {
    var index = this.emploeeInformation.findIndex(x => x.id === id)
    var deleteConfirm = confirm("Do You Want to Delete");
    if (deleteConfirm == true) {
      this.emploeeInformation.splice(index, 1);
    } else {
      return null;
    }
  }
}
