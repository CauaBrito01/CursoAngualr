import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  @Input() name: string = "" //inicilaiza nome como vazio e define que vai importar o name definido no tss
  @Input () Idade: number = 0;
  @Input() UserData!:{Email:string,Telefone:string,CPF:string};
}
