import { HttpClient } from '@angular/common/http';
import {FormGroup,FormControl ,Validator} from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { UserServiceService} from 'src/app/user-service.service';
import {StateList} from './statelist';

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
  stateList :StateList[]= [
   {id:1,name:"Andhra Pradesh"} ,
   {id:2,name:"Arunachal Pradesh"},
   {id:3,name:"Assam"},
   {id:4	,name:"Bihar"},
   {id:5	,name:"Chhattisgarh"},{id:6,	name:"Goa"},
   {id:7	,name:"Gujarat"}, {id:8,name:"Haryana"	},{id:9,name:	"Himachal Pradesh"},{id:10	,name:"Jharkhand"},{id:11,name:	"Karnataka"},{id:12,name:	"Kerala"},{id:13,name:	"Madhya Pradesh"},
  {id:14,name:	"Maharashtra"},{id:15,name	:"Manipur"},{id:16,name:	"Meghalaya"},{id:17,name:	"Mizoram"},{id:18,name:	"Nagaland"},
  {id:19,name:	"Odisha"}, {id:20	,name:"Punjab"},{id:21,name:	"Rajasthan"},{id:22,name	:"Sikkim"},{id:23,name:	"Tamil Nadu"},{id:24	,name:"Telangana"},{id:25,name:	"Tripura"},
   {id:26	,name:"Uttar Pradesh"},{id:27,name:	"Uttarakhand"},{id:28,name:	"West Bengal"}
  ];
  showList: boolean;
  count: number;

  
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
  getLatestUserCount(){
    this._userService.getAllUser().subscribe((response => {
      this.allUser = response;
      this.count = this.allUser.length;
       console.log(this.count );
    }))
  }
  
}
