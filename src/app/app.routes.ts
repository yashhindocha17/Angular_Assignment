import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', loadComponent: () => import('./account/register/register').then(m => m.Register)},
    // {path: 'admin/login', component: Login  },
    { path: 'orders', loadComponent: () => import('./order/orders/orders').then(m => m.Orders) },  

    { path: 'admin', 
        children: [ { path: 'login', loadComponent: () => import('./admin/login/login').then(m => m.Login) } ]
    },
    { path: 'user',
        children: [ { path: 'home', loadComponent: () => import('./User/user-home/user-home').then(m => m.UserHome) } ]
    },

];
 