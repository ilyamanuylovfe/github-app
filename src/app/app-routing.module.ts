import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RepoListComponent } from "./components/repo-list/repo-list.component";
import { RepoItemDetailsComponent } from "./components/repo-item-details/repo-item-details.component";

const routes: Routes = [
  {
    path: "",
    component: RepoListComponent
  },
  {
    path: ":id",
    component: RepoItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
