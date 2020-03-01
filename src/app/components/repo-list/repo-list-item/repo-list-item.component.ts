import { Component, Input } from "@angular/core";
import { IRepository } from "src/app/model/repository.model";

@Component({
  selector: "app-repo-list-item",
  templateUrl: "./repo-list-item.component.html",
  styleUrls: ["./repo-list-item.component.sass"]
})
export class RepoListItemComponent {
  constructor() {}

  @Input() repository: IRepository;
}
