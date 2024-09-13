import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent {

  public studentForm:FormGroup = new FormGroup({
    name: new FormControl(),
    gender: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    batch:new FormControl(),
    address:new FormGroup({
      city: new FormControl() ,
      mandal: new FormControl(),
      district: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl()
    }),
    education : new FormArray([]),

    company :  new FormGroup({
      name: new FormControl(),
      location: new FormControl(),
      package: new FormControl(),
      offerDate: new FormControl()
    }),

    sourcetype : new FormControl(),
    // sourceFrom: new FormControl(),
    // referralName:new FormControl()     
      
  });
   
  get educationFormArray(){
    return this.studentForm.get('education') as FormArray
  }

  addeducation(){
    this.educationFormArray.push(
      new FormGroup({
        qualification: new FormControl(),
        year: new FormControl(), 
        percentage: new FormControl()
      })
    )
  }

 delete(i:number){
  this.educationFormArray.removeAt(i);
 }

 constructor(){
  this.studentForm.get('sourcetype')?.valueChanges.subscribe(
    (value:any)=>{
      if(value=='direct'){
        this.studentForm.addControl('sourceFrom',new FormControl());
        this.studentForm.removeControl('referralName');
      }
      else if(value=='referral'){
        this.studentForm.addControl('referralName',new FormControl());
        this.studentForm.removeControl('sourceFrom');
      }
    }
  )
 }

  create(){
    alert('Form Created Successfully');
    console.log(this.studentForm.value);
    this.studentForm.reset();
  }
}
