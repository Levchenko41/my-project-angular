import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DecodeTokenData, User, UserData } from '../interfaces';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private data?:DecodeTokenData;
  private token=''
userData?:{};
  constructor(private http:HttpClient
    ) { }

register(data:UserData):Observable<{token:string}>{
  return this.http.post<{token:string}>('http://localhost:5000/api/user/registration',data)
  .pipe(
    tap(
      ({token})=>{
        localStorage.setItem('auth-token', token)
        this.setToken(token)
      }
    )
  )
}

login(user:User):Observable<{token:string}> {
  return this.http.post<{token:string}>('http://localhost:5000/api/user/login', user)
.pipe(
  tap(
    ({token})=>{
      localStorage.setItem('auth-token', token)
      this.setToken(token)
    }
  )
)
}

getId(){
  this.data= jwt_decode(localStorage.getItem('auth-token')!)
  console.log('id')
  console.log(this.data.id)
 return this.data.id
}


getUserData(){
  console.log('getUserData')
  console.log(this.userData)
 return this.userData
}

fetchUser(id:number): Observable<any>{
 return this.http.get<any>(`http://localhost:5000/api/user/auth/${id}`)
  }

  

   changeUser(index:number,name:string, lastName:string, email:string, role:string): Observable<any>{
      return this.http.put<any>(`http://localhost:5000/api/user/update/${index}`, {
         name,
         lastName,
         role,
         email,
       })

   };

setToken(token:string){
this.token=token
}

getToken():string{
  return this.token
}

isAuthenticated():boolean{
return !!this.token
}

logout(){
  this.userData={}
  this.setToken('')
  localStorage.clear()
}
getUser(){
return this.userData;
}
}
