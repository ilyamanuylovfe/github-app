import { NgModule } from "@angular/core";
import { FormatTime } from "./format-time.pipe";
import { SanitizeHtmlPipe } from "./safe-html.pipe";

@NgModule({
  declarations: [FormatTime, SanitizeHtmlPipe],
  exports: [FormatTime, SanitizeHtmlPipe]
})
export class PipesModule {}
