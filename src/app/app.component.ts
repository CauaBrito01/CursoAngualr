import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "caua";
  Idade = 18;
  title = 'cursoAngular';
  UserData={
    Email: "cauafranca@",
    Telefone: "1599837",
    CPF: "2983798321"
  }
}
