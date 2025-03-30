import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LevarReceberComponent } from './pages/levar-receber/levar-receber.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Home'
        }
        
    },
    {
        path: 'levar-receber',
        component: LevarReceberComponent,
        data: {
            title: 'Levar e Receber'
        }
    }
];
