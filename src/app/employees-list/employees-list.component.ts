import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  template: `
   <h2 class="text-center m-5" style=""> Employees List </h2>

   <table class="table table-striped table-bordered" style="margin-top: 20px;">
        <thead>
          <tr> 
            <th>Name </th>
            <th>Position </th>
            <th>Level </th>
            <th>Action </th>

          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let employee of employees$ | async">
              <td>{{employee.name}}</td>
              <td>{{employee.position}}</td>
              <td>{{employee.level}}</td>
              <td>
                <button class = "btn btn-primary me-1" [routerLink] = "['edit/', employee._id]">Edit</button>
                <button class = "btn btn-danger" (click)="deleteEmployee(employee._id || '')"> <button class="delBtn">
  <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
  <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
</svg>
</button></button>


              </td>


          </tr>
        </tbody>
   </table>
  <button class="btn btn-primary mt-3" [routerLink]= "['new']"> Add a new Employee </button>
  `,
  styles: [`
h2{
  
  margin-top: 140px !important;
}

  table {
  width: 100%;
}

.btn {
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
}
.delBtn {
  background-color: transparent;
  position: relative;
  border: none;
  color: white;
}

.delBtn::after {
  content: 'delete';
  position: absolute;
  top: -130%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  background-color: rgb(168, 7, 7);
  padding: 4px 8px;
  border-radius: 5px;
  transition: .2s linear;
  transition-delay: .2s;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
}

.icon {
  transform: scale(1.2);
  transition: .2s linear;
}

.delBtn:hover > .icon {
  transform: scale(1.5);
}

.delBtn:hover > .icon path {
  fill: rgb(168, 7, 7);
}

.delBtn:hover::after {
  visibility: visible;
  opacity: 1;
  top: -160%;
}

`
  ]
})
export class EmployeesListComponent implements OnInit {

  employees$: Observable<Employee[]> =  new Observable();

  constructor(private employeesService: EmployeeService){}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  deleteEmployee(id:string): void{
    this.employeesService.deleteEmployee(id).subscribe({
      next: () => this.fetchEmployees()
    })
  }

  private fetchEmployees(): void {
    this.employees$ = this.employeesService.getEmployees();
  }

}
