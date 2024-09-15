import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateStudentService } from 'src/app/services/create-student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

    public studentdetails:any=[];
    public id:any='';
  constructor(private createStudentService:CreateStudentService){
  
        createStudentService.getStudents(this.id).subscribe(
          (data:any)=>{
            this.studentdetails=data;
          }
        )
     
    
  }
}