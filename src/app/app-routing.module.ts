import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ItemListComponent } from './item-list/item-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ShoppingDetailsComponent } from './shopping-details/shopping-details.component';

const routes: Routes = [
  { path: "parent", component: ParentComponent },
  { path: "child", component: ChildComponent },
  { path: "", component: ItemListComponent },
  { path : "shoppingDetails", component : ShoppingDetailsComponent},
  { path : "**", component:PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
