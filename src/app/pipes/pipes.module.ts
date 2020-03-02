import { NgModule } from "@angular/core";
import { FormatTime } from "./format-time.pipe";
import { SanitizeHtmlPipe } from "./safe-html.pipe";
import { ReposFilterPipe } from "./repos-filter.pipe";

@NgModule({
  declarations: [FormatTime, SanitizeHtmlPipe, ReposFilterPipe],
  exports: [FormatTime, SanitizeHtmlPipe, ReposFilterPipe]
})
export class PipesModule {}
