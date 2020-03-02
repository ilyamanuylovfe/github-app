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
    let headers = new HttpHeaders({
      Authorization: `token 1f0b2582f70842a187661c4216b43aae5dc4893f`
    });

    return this.http
      .patch(
        `${GITHUB_API}repos/${owner}/${repo}`,
        {
          description: value
        },
        { headers }
      )
      .subscribe(res => console.log(res));
  } // This API doesn't work
}
