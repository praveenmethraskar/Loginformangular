import { Component } from '@angular/core';
import { MaterialModule } from '../app.module';
import { FormGroup, FormControl ,Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  Form:FormGroup = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required])
  });
  formValue:any;

  onSave(){
    this.formValue=this.Form.value;
  }

}
