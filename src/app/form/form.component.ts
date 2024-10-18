import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  constructor(private authService: AuthService, private router: Router) {}

  username :any = ""
  password :any = "" 

  onSubmit() {
      this.authService.login(this.username,this.password);
      this.username = "";
      this.password = "";
    }
    

}
