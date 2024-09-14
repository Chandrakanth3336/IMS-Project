import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CanComponentDeactivate } from '../../services/guards/can-deactivate.guard';
import { CreateStudentService } from 'src/app/services/create-student.service';



@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements CanComponentDeactivate{
    isDirty:boolean=true;
  canDeactivate(){
    if(this.isDirty){
      console.log('can deactivate is called', this.isDirty);
      const confirmMessage = 'You have unsaved changes. Do you really want to leave';
      return confirm(confirmMessage);
    }
    else{
      return true;
    }
  }


  public studentForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    mobile: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    batch:new FormControl('',[Validators.required]),
    address:new FormGroup({
      city: new FormControl('',[Validators.required]) ,
      mandal: new FormControl(''),
      district: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    education : new FormArray([]),

    company :  new FormGroup({
      name: new FormControl(''),
      location: new FormControl(''),
      package: new FormControl(''),
      offerDate: new FormControl('')
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
        qualification: new FormControl(''),
        year: new FormControl(''), 
        percentage: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)])
      })
    )
  }

 delete(i:number){
  this.educationFormArray.removeAt(i);
 }

 constructor(private _createStudentService:CreateStudentService){
  this._createStudentService.createStudents(this.studentForm).subscribe(
    (data:any)=>{
      if(data){
        alert('created');
      }
    },
    (err)=>{
      alert(err.error.error);
    }
  )
  
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
