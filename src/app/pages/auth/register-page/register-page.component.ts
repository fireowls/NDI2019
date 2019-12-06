import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Auth } from '../user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private formBuilder:FormBuilder, private authService:AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      cpassword: ['', [Validators.required]],
      nom: ['',[Validators.required]],
      prenom: ['',[Validators.required]],
      numRue: ['',[Validators.required]],
      rue: ['',Validators.required],
      ville: ['',Validators.required],
      civilite: ['',Validators.required]
    });
  }


  onSubmit(){
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    const auth: Auth = {
      firstName:this.registerForm.get('prenom').value,
      lastName:this.registerForm.get('nom').value,
      address:this.registerForm.get('numRue').value+' '+this.registerForm.get('rue').value+' '+this.registerForm.get('ville').value,
      pointOfInterest:['']
    }
    
    this.authService.signup(email,password,auth).then(
      () => {
        console.log("création de compte reussi");
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
