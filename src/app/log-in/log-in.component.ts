import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  profileForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required]),
    });
  }
  get email() { return this.profileForm.get('email'); }
  get password() { return this.profileForm.get('password'); }
  
}
