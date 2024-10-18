import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ApiDataService } from '../services/GeneralServices/api-data.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CardModule } from 'primeng/card';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatTableModule, CardModule, ToggleButtonModule, FormsModule ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  data :any= "";
  displayedColumns: string[] = ['position', 'name', 'location'];
  yourToggleValue: boolean = false;
  

  constructor(private authservice: AuthService, private apiservice: ApiDataService) {}
 
  ngOnInit(): void {
    this.apiservice.getDataFromApi().subscribe(
      (response) => {
         this.data = response.data[0] || "";
         console.log("datafromapi",this.data)
      },
      (error) => {
        console.error("error", error);
      }
    )
  }

  logoutUser() {
    this.authservice.logout();
  }
  

}
