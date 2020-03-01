import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "formatTime" })
export class FormatTime implements PipeTransform {
  constructor() {}
  transform(time: string) {
    const date = new Date(time);
    return time.replace(
      /(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)Z/,
      "$3/$2/$1 $4:$5:$6"
    );
  }
}
