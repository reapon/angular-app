import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private formbBuilder : FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formbBuilder.group({
      username : [''],
      password : ['']
    });
  }

  login(){
    this.http.get<any>('http://www.reapon.somee.com/api/Login/allUser')
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password;
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['/employee']);
      }else{
        alert("Login Failed");
      }
    }, err=>{
      alert("Login Failed");
    });
  }

}
