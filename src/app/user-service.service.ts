import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit {
  allUser: object;

  constructor(private _httpClient:HttpClient) { }
  ngOnInit(): void {
    this.getAllUser();
  }

  createUser(user){
    return this._httpClient.post("http://localhost:3000/users",user)

  }
  getAllUser(){
        return this._httpClient.get("http://localhost:3000/users");
  }
  updateUser(user){
       return this._httpClient.put("http://localhost:3000/users/"+ user.id,user)
  }
  deleteUser(user){
   return this._httpClient.delete("http://localhost:3000/users/"+ user.id)
  }
}
