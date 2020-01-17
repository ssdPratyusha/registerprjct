import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/user.model';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
user: User;
emailpattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  NgForm: any;
  constructor() { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?: NgForm)
{
  if(form!=null)
  form.reset();
  this.user={
    UserName:'',
    Password:'',
    Email:'',
    FirstName:'',
  LastName:''
  }
  }


  }

 