// ng-route-appmodule
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroes/heroe/:id', component: HeroeComponent}, 
    /*ruta que va a recibir un parametro el id de cada heroe que se quiere mostrar cuando se pase el parametro por la url */
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
