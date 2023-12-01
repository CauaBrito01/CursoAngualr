import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Turca", type: 'dog', age: 12},
    {name:"Tom", type: 'cat' ,age: 112}
  ]
  animal: Animal = 
    {name: "teste",
    type: 'asdasd',
    age: 12}


  adetails = '';

  constructor(private listService: ListService){}

  ngOnInit(): void {}

  showAge(animal : Animal): void{
    this.adetails =`o pet ${animal.name}  tem  ${animal.age}  anos!`;
  }

  removeAnimal(animal : Animal){
    console.log("animal removido")
    this.animals = this.listService.remove(this.animals, animal)
  }

}


