import { Component } from '@angular/core';
import { CreateStudentService } from 'src/app/services/create-student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
  public zxcv:any='';
  public asdf:any='';
  public column:any='';
  public order:any='';

  public students:any=[];
  constructor(private _createStudentService:CreateStudentService){
    _createStudentService.getStudent().subscribe(
      (data:any)=>{
        console.log(data);
        this.students=data;
      },
      (error)=>{
        alert('Internal Server Error');
      }
    )
  }

  limit(){
    this._createStudentService.getPaginaated(this.asdf,this.zxcv).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (error)=>{
        alert('Internal Server Error');
      }
    )
  }

    sort(){
      this._createStudentService.getSorting(this.column,this.order).subscribe(
        (data:any)=>{
          this.students=data;
        },
        (error)=>{
          alert('Internal Server Error');
        }
      )
    }

}
