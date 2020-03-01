import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RepoListComponent } from "./repo-list.component";
import {
  HttpClientModule,
  HttpClient,
  HttpHandler
} from "@angular/common/http";
import { FormatTime } from "src/app/pipes/format-time.pipe";
import { GithubService } from "src/app/services/github.service";

describe("RepoListComponent", () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FormatTime,
        GithubService,
        HttpClientModule,
        HttpClient,
        HttpHandler
      ],
      declarations: [RepoListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create repos list", () => {
    expect(component).toBeTruthy();
  });
});
