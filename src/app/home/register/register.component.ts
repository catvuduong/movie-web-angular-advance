import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  register(value: any) {
    const user = {
      username: value.username,
      password: value.password,
      email: value.email
    }
    this.dataService.register(user).subscribe(() => {
      alert("Đăng ký thành công");
    });
  }
}
