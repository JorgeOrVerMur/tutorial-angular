import { Component, computed, signal } from '@angular/core';


interface Character {
  id: number
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css',
})
export class DragonballSuperComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 10000
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000
    }
  ])


  addCharacter() {
    console.log(this.name(), this.power());
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    //this.characters().push(newCharacter);

    //Actualizamos la señal con el nuevo personaje
    this.characters.update((list) => [...list, newCharacter]);

    this.name.set('')
    this.power.set(0)
  }


}
