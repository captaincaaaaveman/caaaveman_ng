import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BlogModule } from 'app/blog/blog.module';
import { MarkdownToHtmlModule } from "ng2-markdown-to-html/dist/lib";
import { AppRoutingModule } from "app/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BlogModule,
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
