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
  let fakeData = [
    {
      id: 152756770,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTI3NTY3NzA=",
      name: "bootstrap-datepicker",
      full_name: "ilyamanuylovfe/bootstrap-datepicker",
      private: false,
      owner: {
        login: "ilyamanuylovfe",
        id: 36470309,
        node_id: "MDQ6VXNlcjM2NDcwMzA5",
        avatar_url: "https://avatars0.githubusercontent.com/u/36470309?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/ilyamanuylovfe",
        html_url: "https://github.com/ilyamanuylovfe",
        followers_url: "https://api.github.com/users/ilyamanuylovfe/followers",
        following_url:
          "https://api.github.com/users/ilyamanuylovfe/following{/other_user}",
        gists_url:
          "https://api.github.com/users/ilyamanuylovfe/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/ilyamanuylovfe/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/ilyamanuylovfe/subscriptions",
        organizations_url: "https://api.github.com/users/ilyamanuylovfe/orgs",
        repos_url: "https://api.github.com/users/ilyamanuylovfe/repos",
        events_url:
          "https://api.github.com/users/ilyamanuylovfe/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/ilyamanuylovfe/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/ilyamanuylovfe/bootstrap-datepicker",
      description: "A datepicker for twitter bootstrap (@twbs).",
      fork: true,
      url: "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker",
      forks_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/forks",
      keys_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/teams",
      hooks_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/hooks",
      issue_events_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/events",
      assignees_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/tags",
      blobs_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/languages",
      stargazers_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/stargazers",
      contributors_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/contributors",
      subscribers_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/subscribers",
      subscription_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/subscription",
      commits_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/merges",
      archive_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/downloads",
      issues_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/labels{/name}",
      releases_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/ilyamanuylovfe/bootstrap-datepicker/deployments",
      created_at: "2018-10-12T13:44:23Z",
      updated_at: "2020-02-28T13:15:02Z",
      pushed_at: "2018-10-09T08:08:07Z",
      git_url: "git://github.com/ilyamanuylovfe/bootstrap-datepicker.git",
      ssh_url: "git@github.com:ilyamanuylovfe/bootstrap-datepicker.git",
      clone_url: "https://github.com/ilyamanuylovfe/bootstrap-datepicker.git",
      svn_url: "https://github.com/ilyamanuylovfe/bootstrap-datepicker",
      homepage: "",
      size: 4741,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "apache-2.0",
        name: "Apache License 2.0",
        spdx_id: "Apache-2.0",
        url: "https://api.github.com/licenses/apache-2.0",
        node_id: "MDc6TGljZW5zZTI="
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 146257164,
      node_id: "MDEwOlJlcG9zaXRvcnkxNDYyNTcxNjQ=",
      name: "react-app",
      full_name: "ilyamanuylovfe/react-app",
      private: false,
      owner: {
        login: "ilyamanuylovfe",
        id: 36470309,
        node_id: "MDQ6VXNlcjM2NDcwMzA5",
        avatar_url: "https://avatars0.githubusercontent.com/u/36470309?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/ilyamanuylovfe",
        html_url: "https://github.com/ilyamanuylovfe",
        followers_url: "https://api.github.com/users/ilyamanuylovfe/followers",
        following_url:
          "https://api.github.com/users/ilyamanuylovfe/following{/other_user}",
        gists_url:
          "https://api.github.com/users/ilyamanuylovfe/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/ilyamanuylovfe/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/ilyamanuylovfe/subscriptions",
        organizations_url: "https://api.github.com/users/ilyamanuylovfe/orgs",
        repos_url: "https://api.github.com/users/ilyamanuylovfe/repos",
        events_url:
          "https://api.github.com/users/ilyamanuylovfe/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/ilyamanuylovfe/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/ilyamanuylovfe/react-app",
      description:
        "First attempt to make react app. Actually it was very well.",
      fork: false,
      url: "https://api.github.com/repos/ilyamanuylovfe/react-app",
      forks_url: "https://api.github.com/repos/ilyamanuylovfe/react-app/forks",
      keys_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/ilyamanuylovfe/react-app/teams",
      hooks_url: "https://api.github.com/repos/ilyamanuylovfe/react-app/hooks",
      issue_events_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/events",
      assignees_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/branches{/branch}",
      tags_url: "https://api.github.com/repos/ilyamanuylovfe/react-app/tags",
      blobs_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/languages",
      stargazers_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/stargazers",
      contributors_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/contributors",
      subscribers_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/subscribers",
      subscription_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/subscription",
      commits_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/merges",
      archive_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/downloads",
      issues_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/labels{/name}",
      releases_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-app/deployments",
      created_at: "2018-08-27T06:41:46Z",
      updated_at: "2020-02-28T10:06:49Z",
      pushed_at: "2018-08-27T13:04:56Z",
      git_url: "git://github.com/ilyamanuylovfe/react-app.git",
      ssh_url: "git@github.com:ilyamanuylovfe/react-app.git",
      clone_url: "https://github.com/ilyamanuylovfe/react-app.git",
      svn_url: "https://github.com/ilyamanuylovfe/react-app",
      homepage: "",
      size: 996,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 150269122,
      node_id: "MDEwOlJlcG9zaXRvcnkxNTAyNjkxMjI=",
      name: "react-native-app",
      full_name: "ilyamanuylovfe/react-native-app",
      private: false,
      owner: {
        login: "ilyamanuylovfe",
        id: 36470309,
        node_id: "MDQ6VXNlcjM2NDcwMzA5",
        avatar_url: "https://avatars0.githubusercontent.com/u/36470309?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/ilyamanuylovfe",
        html_url: "https://github.com/ilyamanuylovfe",
        followers_url: "https://api.github.com/users/ilyamanuylovfe/followers",
        following_url:
          "https://api.github.com/users/ilyamanuylovfe/following{/other_user}",
        gists_url:
          "https://api.github.com/users/ilyamanuylovfe/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/ilyamanuylovfe/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/ilyamanuylovfe/subscriptions",
        organizations_url: "https://api.github.com/users/ilyamanuylovfe/orgs",
        repos_url: "https://api.github.com/users/ilyamanuylovfe/repos",
        events_url:
          "https://api.github.com/users/ilyamanuylovfe/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/ilyamanuylovfe/received_events",
        type: "User",
        site_admin: false
      },
      html_url: "https://github.com/ilyamanuylovfe/react-native-app",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/ilyamanuylovfe/react-native-app",
      forks_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/forks",
      keys_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/teams",
      hooks_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/hooks",
      issue_events_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/events",
      assignees_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/tags",
      blobs_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/languages",
      stargazers_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/stargazers",
      contributors_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/contributors",
      subscribers_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/subscribers",
      subscription_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/subscription",
      commits_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/merges",
      archive_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/downloads",
      issues_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/labels{/name}",
      releases_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/ilyamanuylovfe/react-native-app/deployments",
      created_at: "2018-09-25T13:23:39Z",
      updated_at: "2018-09-25T13:40:10Z",
      pushed_at: "2018-09-25T13:40:09Z",
      git_url: "git://github.com/ilyamanuylovfe/react-native-app.git",
      ssh_url: "git@github.com:ilyamanuylovfe/react-native-app.git",
      clone_url: "https://github.com/ilyamanuylovfe/react-native-app.git",
      svn_url: "https://github.com/ilyamanuylovfe/react-native-app",
      homepage: null,
      size: 957,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    }
  ];

  beforeEach(async(() => {
    let store = {};

    TestBed.configureTestingModule({
      // imports: [FormatTime, GithubService, HttpClientModule, HttpClient],
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
