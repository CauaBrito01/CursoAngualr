import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentsComponent } from "./components/first-components/first-components.component";
import { ListService } from "./services/list.service";

const  routes : Routes = [
    {path: '', component:FirstComponentsComponent},
    {path: 'list', component:ListService}
]


@NgModule({
    declarations:[],
    imports: [RouterModule],
    exports: [RouterModule],
})

export class AppRoutingModule {}