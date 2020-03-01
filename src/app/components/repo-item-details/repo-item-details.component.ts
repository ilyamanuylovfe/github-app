import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild
} from "@angular/core";
import { Observable } from "rxjs";
import { GithubService } from "src/app/services/github.service";
import { StorageMap } from "@ngx-pwa/local-storage";
import { IRepository } from "src/app/model/repository.model";

@Component({
  selector: "app-repo-item-details",
  templateUrl: "./repo-item-details.component.html",
  styleUrls: ["./repo-item-details.component.sass"]
})
export class RepoItemDetailsComponent implements OnInit {
  constructor(
    private githubService: GithubService,
    private localStorage: StorageMap
  ) {}

  repoData$: Observable<IRepository>;
  tags;
  readme;
  repoDetails: IRepository;
  isEditing: boolean;
  showTags: boolean;
  showReadme: boolean;
  description: string;
  path: string;
  isDataLoaded: boolean;
  @ViewChild("descriptionInput", { static: false })
  descriptionInput: ElementRef;

  ngOnInit() {
    this.path = window.location.pathname.substr(1);
    this.localStorage.get(`${this.path}/tags`).subscribe(tags => {
      this.tags = tags;
    });

    this.localStorage.get(`${this.path}/readme`).subscribe(readme => {
      this.readme = readme;
    });
    this.localStorage.get(this.path).subscribe((repo: IRepository) => {
      this.repoDetails = repo;
      this.description = this.repoDetails.description;
      this.isDataLoaded = true;
    });
  }

  @HostListener("window:beforeunload", ["$event"])
  beforeClose($event) {
    if (
      this.description &&
      this.description !== this.descriptionInput.nativeElement.value
    ) {
      $event.returnValue = "Your data will be lost!";
    }
  }

  downloadZip(user, repo) {
    this.githubService.downloadZip(user, repo);
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }

  update(event, value) {
    if (event && event.key === "Enter" && this.description !== value) {
      this.githubService.updateDescription(
        value,
        this.repoDetails.owner.login,
        this.repoDetails.name
      );
    }
  }

  toggleTags() {
    this.showTags = !this.showTags;
  }

  toggleReadme() {
    this.showReadme = !this.showReadme;
  }
}
