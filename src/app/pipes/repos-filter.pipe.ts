import { Pipe, PipeTransform } from "@angular/core";
import { IRepository } from "../model/repository.model";

@Pipe({ name: "reposFilter", pure: false })
export class ReposFilterPipe implements PipeTransform {
  constructor() {}

  transform(
    list: Array<IRepository>,
    filterText: string,
    filterBy: string = "name"
  ) {
    return list
      ? list.filter(
          item => item[filterBy].search(new RegExp(filterText, "i")) > -1
        )
      : [];
  }
}
