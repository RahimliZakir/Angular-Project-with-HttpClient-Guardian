import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/guards/login.guard';
import { AddPostComponent } from './add-post/add-post.component';
import { BasicsAngularComponent } from './basics-angular/basics-angular.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';

const routes: Routes = [
  { path: 'basics', component: BasicsAngularComponent },
  { path: "products", component: ProductsComponent },
  { path: "product/:prodId", component: ProductDetailsComponent },
  { path: 'switch', component: SwitchCaseComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post-details/:id', component: PostDetailsComponent, canActivate: [LoginGuard] },
  { path: "add-post", component: AddPostComponent, canActivate: [LoginGuard] },
  { path: "edit-post/:editId", component: EditPostComponent, canActivate: [LoginGuard] }
  // ,
  // { path: '', redirectTo: "posts", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
