import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/interfaces/department';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})

export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  $departments: Observable<Department[]> | undefined;
  constructor(
    private departmentService: DepartmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.departmentService.getDepartments().subscribe((departments) => {
      this.$departments = this.departmentService.getDepartments();
    //   this.departments = departments;


  }
  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', {id: departmentId}]);
}
}
