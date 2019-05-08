import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    // username: new FormControl('', Validators.required),
    // password: new FormControl('', Validators.required)
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      UsernameValidators.cannotContainSpace
    ],
    UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }
  
  get username(){
    return this.form.get('username');
  }

  constructor() { }

  ngOnInit() {
  }

}
