import { Component } from '@angular/core';
import { CreateStudentService } from 'src/app/services/create-student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {

  public students:any=[];
  constructor(private _createStudentService:CreateStudentService){
    _createStudentService.getStudent().subscribe(
      (data:any)=>{
        console.log(data);
        this.students=data;
      }
    )
  }



}
