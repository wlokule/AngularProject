import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  
  constructor() { }
  
  public username:string | undefined;
  public password: string | undefined; 
  

  ngOnInit(): void {
   
  }
  onSubmit (form: { valid: any; value: any; }){
    if (form.valid){
      //required submit operations
    console.log(form.value);
    }
  
  
}

    

}
