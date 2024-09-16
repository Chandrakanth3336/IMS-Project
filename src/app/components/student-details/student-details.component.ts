import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateStudentService } from 'src/app/services/create-student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

    public studentdetails:any={};
  constructor(private createStudentService:CreateStudentService, private activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        createStudentService.getStudents(data.id).subscribe(
          (data:any)=>{
            this.studentdetails=data;
          }
        )
      }
    )

    
  }
}