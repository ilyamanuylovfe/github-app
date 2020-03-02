import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RepoListComponent } from "./components/repo-list/repo-list.component";
import { RepoListItemComponent } from "./components/repo-list/repo-list-item/repo-list-item.component";
import { PipesModule } from "./pipes/pipes.module";
import { RepoItemDetailsComponent } from "./components/repo-item-details/repo-item-details.component";
import { GithubService } from "./services/github.service";
import { FormsModule } from "@angular/forms";

export function usersProvider(provider) {
  return () => provider.fetchUser();
}

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoListItemComponent,
    RepoItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    FormsModule
  ],
  providers: [
    GithubService,
    {
      provide: APP_INITIALIZER,
      useFactory: usersProvider,
      deps: [GithubService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
