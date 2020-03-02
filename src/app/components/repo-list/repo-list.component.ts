import { Component, OnInit } from "@angular/core";
import { GithubService } from "src/app/services/github.service";
import { StorageMap } from "@ngx-pwa/local-storage";
import { IRepository } from "src/app/model/repository.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-repo-list",
  templateUrl: "./repo-list.component.html",
  styleUrls: ["./repo-list.component.sass"]
})
export class RepoListComponent implements OnInit {
  constructor(
    private githubService: GithubService,
    private localStorage: StorageMap,
    private router: Router
  ) {}

  usersRepos: Array<IRepository>;
  activeFilter = "name";
  filterBy: string;

  ngOnInit(): void {
    this.usersRepos = this.githubService.getUsersRepos();
    this.sortByName();
  }

  sortBy(property: string) {
    property === "name" ? this.sortByName() : this.sortByDate();
    this.activeFilter = property;
  }

  sortByName() {
    this.usersRepos.sort((repoA, repoB) => {
      if (repoA.name.toLowerCase() > repoB.name.toLowerCase()) {
        return 1;
      } else if (repoA.name.toLowerCase() < repoB.name.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  sortByDate() {
    this.usersRepos.sort((repoA, repoB) => {
      return repoA.updated_at < repoB.updated_at
        ? -1
        : repoA.updated_at > repoB.updated_at
        ? 1
        : 0;
    });
  }

  setDetails(repo) {
    this.localStorage.get(repo.name).subscribe({
      next: rep => {
        if (!rep) {
          this.localStorage.set(repo.name, repo).subscribe(() => {});
          this.githubService.fetchTags(repo.tags_url, repo.name);
          this.githubService.fetchReadme(repo.owner.login, repo.name);
          this.router.navigate([`/${repo.name}`]);
        } else {
          this.router.navigate([`/${repo.name}`]);
          return;
        }
      }
    });
  }
}
