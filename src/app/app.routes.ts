import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { WhoWeAreComponent } from './WhoWeAre/WhoWeAre.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'WhoWeAre',component:WhoWeAreComponent},
];
