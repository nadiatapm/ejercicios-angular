import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  userForm:FormGroup;
/*se copia form de la documentacion privado solo existe en la instancia no se puede ver desde otro componente*/
//se inyecta authservice para conectar con firebase el formulario de registro
  constructor(private fb:FormBuilder, private authService:AuthService) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.userForm = this.fb.group({
      name :[ '', Validators.required],
      age : [0, Validators.min(18)],
      mail :['',Validators.required],
      password :['', Validators.required]
      
    });
    this.userForm.statusChanges.subscribe((value:any) =>{
      console.log("VALIDATION CHANGE > "+JSON.stringify(value));
    });
    this.userForm.valueChanges.subscribe((value:any)=>{
      console.log("DATA CHANGE > "+JSON.stringify(value));
    });
  }
  onRegisterClick() {
    this.authService.signup(this.userForm.get("mail").value, this.userForm.get("password").value);
  }
  //crear boton logout
  onLogoutClick() {
    this.authService.logout();
  }
}
