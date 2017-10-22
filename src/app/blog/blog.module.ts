import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BlogComponent } from "./components/blog.component";
import { MarkdownToHtmlModule } from "ng2-markdown-to-html/dist/lib";
import { BlogService } from "app/blog/services/blog.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarkdownToHtmlModule.forRoot()
  ],
  declarations: [
    BlogComponent
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule {}
