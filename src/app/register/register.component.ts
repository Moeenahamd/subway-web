import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  
  profileForm:FormGroup;
  ngOnInit()
  {
   this.profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    phone: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });
}
  FormGroup(arg0: { firstName: FormControl; lastName: FormControl; }) {
    throw new Error("Method not implemented.");
  }
  register(){
    console.log(this.profileForm);
  }
  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get email() { return this.profileForm.get('email'); }
  get phone() { return this.profileForm.get('phone'); }
  get password() { return this.profileForm.get('password'); }
  
}
