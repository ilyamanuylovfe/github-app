import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RepoItemDetailsComponent } from "./repo-item-details.component";
import { GithubService } from "src/app/services/github.service";
import {
  HttpClientModule,
  HttpClient,
  HttpHandler
} from "@angular/common/http";

describe("RepoItemDetailsComponent", () => {
  let component: RepoItemDetailsComponent;
  let fixture: ComponentFixture<RepoItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RepoItemDetailsComponent],
      providers: [GithubService, HttpClientModule, HttpClient, HttpHandler]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
