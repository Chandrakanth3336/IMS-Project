import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  public search:any='';

  
  public students:any=[];
  constructor(private _createStudentService:CreateStudentService, private router:Router){
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

    filter(){
      this._createStudentService.getFiltered(this.search).subscribe(
        (data:any)=>{
          this.students=data;
        },
        (error)=>{
          alert('Internal Server Error');
        }
      )
    }

    view(id:string){
      this.router.navigateByUrl('/dashboard/student-details/'+id);
    }
    delete(id:string){
      this._createStudentService.getDelete(id).subscribe(
        (data:any)=>{
          alert("Deleted Successfully!!!");
          location.reload();
        },
        (error:any)=>{
          alert("Deletion Failed")
        }
      )
    }
}
