import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { BlogEntry } from "../domain/blog-entry";
import { BlogService } from "../services/blog.service";

//import { Markdown } from "../domain/markdown";

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
})

export class BlogComponent implements OnInit {

  markdown: String;
  tags: String[];

  blog: BlogEntry;

  getTags(): String[] {
    return this.tags;
  }


  constructor(
    private router: Router, private blogService: BlogService
  ) {
    this.blog = new BlogEntry();
    this.blog.markdown = "### Blog goes here";
    }



  ngOnInit(): void {
    this.markdown = `# Hello World`;

    this.blogService.getBlogEntry().then( 
       blog => {
           console.log( `Replacing `,this.blog, `with `, blog );
           this.blog = blog;
        }
     );
  }

}
