import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formbBuilder : FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formbBuilder.group({
      username : [''],
      password : ['']
    });
  }

  signUp(){
    this.http.post<any>('http://www.reapon.somee.com/api/Login/register',this.signupForm.value)
    .subscribe(res=>{
      alert('Registered Successfully');
      this.signupForm.reset();
      this.router.navigateByUrl('/login');
    }, err=>{
      alert('Error');
    })
  }

}
