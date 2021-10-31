import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/guards/login.guard';
import { AddPostComponent } from './add-post/add-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  //TODO: Posts
  { path: 'posts', component: PostsComponent },
  { path: 'post-details/:id', component: PostDetailsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'edit-post/:editId', component: EditPostComponent },
  //TODO: Posts
  //TODO: Categories
  { path: 'categories', component: CategoriesComponent },
  //TODO: Categories
  //TODO: Products
  { path: 'products', component: ProductsComponent },
  //TODO: Products
  // { path: '', redirectTo: "posts", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
