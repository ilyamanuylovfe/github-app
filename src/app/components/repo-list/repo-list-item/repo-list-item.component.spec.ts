import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RepoListItemComponent } from "./repo-list-item.component";
import { FormatTime } from "src/app/pipes/format-time.pipe";

describe("RepoListItemComponent", () => {
  let component: RepoListItemComponent;
  let fixture: ComponentFixture<RepoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FormatTime],
      declarations: [RepoListItemComponent, FormatTime]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create component", () => {
    expect(component).toBeTruthy();
  });
});
