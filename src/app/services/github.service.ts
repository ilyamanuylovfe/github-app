import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StorageMap } from "@ngx-pwa/local-storage";
import { IRepository } from "../model/repository.model";

const GITHUB_API = "https://api.github.com/";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  constructor(private http: HttpClient, private localStorage: StorageMap) {}

  fetchUser() {
    if (localStorage.hasOwnProperty("usersRepos")) {
      return;
    } else {
      return new Promise(resolve => {
        this.http
          .get(GITHUB_API + "users/ilyamanuylovfe/repos")
          .subscribe((repos: IRepository) => {
            localStorage.setItem("usersRepos", JSON.stringify(repos));
            resolve(true);
          });
      });
    }
  }

  getUsersRepos() {
    return JSON.parse(localStorage.getItem("usersRepos"));
  }

  fetchTags(url, repo) {
    return this.http.get(url).subscribe(tags => {
      this.localStorage.set(`${repo}/tags`, tags).subscribe(() => {});
    });
  }

  fetchReadme(owner, repo) {
    const headers = new HttpHeaders({
      Accept: "application/vnd.github.VERSION.html+json"
    });

    return this.http
      .get(`${GITHUB_API}repos/${owner}/${repo}/readme/`, {
        headers,
        responseType: "text"
      })
      .subscribe(readme => {
        return this.localStorage
          .set(`${repo}/readme`, readme)
          .subscribe(() => {});
      });
  }

  downloadZip(owner, repoName) {
    window.location.href = `${GITHUB_API}repos/${owner}/${repoName}/zipball/master`;
    return;
  }

  updateDescription(value, owner, repo) {
<<<<<<< HEAD
    const token = "e7b7f2ac3c28936e3b894b45607da365c7114146";
=======
    const token = "b13807413e2fc01bf77da727856edb4ee413499c";
>>>>>>> 8756b79fc498060d9951e9116d5e10919ae7a0b8
    let headers = new HttpHeaders({
      Authorization: `token ${token}`
    });

    return this.http
      .patch(
        `${GITHUB_API}repos/${owner}/${repo}`,
        {
          description: value
        },
        { headers }
      )
      .subscribe((update: IRepository) => {
        this.localStorage.set(update.name, update).subscribe(() => {});
        const local = this.getUsersRepos();
        const updateRepoIndex = local.findIndex(repo => repo.id === update.id);
        local.splice(updateRepoIndex, 1, update);
        localStorage.setItem("usersRepos", JSON.stringify(local));
      });
  }
}
