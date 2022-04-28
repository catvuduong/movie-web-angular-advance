import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: Router
  ) { }

  ngOnInit(): void {

    const admin = localStorage.getItem("Admin");
    if (admin) {
      this.route.navigate(["./admin/dash-board"]);
    }
  }

  login(value: any) {
    const user = {
      username: value.username,
      password: value.password
    }
    localStorage.setItem("Admin", JSON.stringify(user));
    this.dataService.login(user).subscribe((data) => {
      if (data.role === 0) {
        localStorage.setItem("Admin", JSON.stringify(data));
        alert("Đăng nhập thành công")
        this.route.navigate(["./admin/dash-board"]);
      } else {
        alert("Đăng nhập thất bại");
      }
    })
  }

}
