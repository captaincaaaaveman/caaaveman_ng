import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from "app/blog/components/blog.component";

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },

  // Lisa
  { path: 'blog', component: BlogComponent },

  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
