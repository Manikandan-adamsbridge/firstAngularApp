import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    {path: "", component: FormComponent},
    {path: "Home", component: HomePageComponent, canActivate: [AuthGuard]},
];
