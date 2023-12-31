import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {

  addresses:any=[1,1,1,1];
  myForm:FormGroup = this._formBuilder.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    streetAddress:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    zipcode:['',Validators.required],
    mobile:['',Validators.required],
    
  })

  constructor(private _formBuilder:FormBuilder){

  }

  handleCreateOrder(item:any){

  }

  handleSubmit=()=>{
    const formValue = this.myForm.value;
    console.log("form-data",formValue)
  }


}
