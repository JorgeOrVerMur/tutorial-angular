import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter';
import { HeroComponent } from './components/hero/hero';
import { DragonballComponent } from './components/dragonball/dragonball';
import { DragonballSuperComponent } from './components/dragonball-super/dragonball-super';

export const routes: Routes = [
    { path: 'counter', component: CounterComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'dragonball', component: DragonballComponent },
    { path: 'dragonball-super', component: DragonballSuperComponent },
    { path: '**', redirectTo: 'counter' }
];
