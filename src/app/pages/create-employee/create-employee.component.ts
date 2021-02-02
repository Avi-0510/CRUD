import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService} from 'src/app/user-service.service'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  allUser: any;
  editMode:boolean = false;
  UserDetails = {
      fname: "",
      lname: "",
      inlineRadioOptions: "",
      Designation: "",
      email: "",
      mnumber: "",
      address: "",
      city: "",
      state: "P",
      zip: "",
      id: ""
      
  }
  showList: boolean;

  constructor(private _userService:UserServiceService,_httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getLatestUser();
  }
  getFormData(objForm){
    console.log(objForm);
    this._userService.createUser(objForm).subscribe((response =>{
     this.getLatestUser();
    }))
  }


  getLatestUser(){
    this._userService.getAllUser().subscribe((response => {
      this.allUser = response;
    }))
  }

  editUser(user){
    this.editMode = true;
     this.UserDetails = user;
  }
  
  deleteUser(user){
    this._userService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  updateUser(){
    this.editMode = !this.editMode;
    this._userService.updateUser(this.UserDetails).subscribe(()=>{
      this.getLatestUser();
    })
  }
  toggleList(){
    this.showList = !this.showList;
  }

}
