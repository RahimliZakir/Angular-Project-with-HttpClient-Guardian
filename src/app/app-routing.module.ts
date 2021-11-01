import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/guards/login.guard';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  //TODO: Posts
  { path: 'posts', component: PostsComponent },
  {
    path: 'post-details/:id',
    component: PostDetailsComponent,
    canActivate: [LoginGuard],
  },
  { path: 'add-post', component: AddPostComponent, canActivate: [LoginGuard] },
  {
    path: 'edit-post/:editId',
    component: EditPostComponent,
    canActivate: [LoginGuard],
  },
  //TODO: Posts
  //TODO: Categories
  { path: 'categories', component: CategoriesComponent },
  {
    path: 'category-details/:id',
    component: CategoryDetailsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'edit-category/:id',
    component: EditCategoryComponent,
    canActivate: [LoginGuard],
  },
  //TODO: Categories
  //TODO: Products
  { path: 'products', component: ProductsComponent },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
    canActivate: [LoginGuard],
  },
  //TODO: Products
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
