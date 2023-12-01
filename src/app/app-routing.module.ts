import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FirstComponentsComponent } from "./components/first-components/first-components.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";

const routes: Routes = [
    {path: '' , component: FirstComponentsComponent},
    {path: 'list' , component: ListRenderComponent},

]

@NgModule({
    declarations: [],
    import: 
})