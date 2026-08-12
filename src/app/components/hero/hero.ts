import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {

  name = signal('Superman');
  age = signal(100);

  heroDescription = computed(() => {
    //return `${this.name()} es un héroe con ${this.age()} años.`;
    const description = this.name() + ' es un heroe de ' + this.age() + ' años';
    return description;
  })
  // getHeroDescription(): string {
  //   return `${this.name()} es un héroe con ${this.age()} años.`;
  // }

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  })

  changeHero() {
    let batman = "batman";
    this.name.set(batman.toUpperCase());
  }

  changeAge() {
    this.age.set(45);
  }

  resetForm() {
    this.name.set('Superman');
    this.age.set(100);
  }

}
