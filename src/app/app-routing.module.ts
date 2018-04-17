/*se crea modulo nuevo */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
//especifico la ruta de mis componentes
const routes: Routes = [
  { path: 'register', component: RegisterFormComponent }
];

@NgModule({
  imports: [
    //for es un metodo que tiene el modulo que exportamos
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
