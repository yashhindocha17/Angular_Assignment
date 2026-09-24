import { Routes } from '@angular/router';
import { Register } from './account/register/register';
import { Login } from './admin/login/login';

export const routes: Routes = [
    { path: 'register', component: Register },
    {path: 'admin/login', component: Login  }

];
