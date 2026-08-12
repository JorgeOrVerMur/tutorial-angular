import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter';
import { HeroComponent } from './components/hero/hero';

export const routes: Routes = [
    { path: 'counter', component: CounterComponent },
    { path: 'hero', component: HeroComponent },
    {
        path: '**',
        redirectTo: 'counter'
    }
];
