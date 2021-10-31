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
  { path: 'post-details/:id', component: PostDetailsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'edit-post/:editId', component: EditPostComponent },
  //TODO: Posts
  //TODO: Categories
  { path: 'categories', component: CategoriesComponent },
  { path: 'category-details/:id', component: CategoryDetailsComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'edit-category/:id', component: EditCategoryComponent },
  //TODO: Categories
  //TODO: Products
  { path: 'products', component: ProductsComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  //TODO: Products
  // { path: '', redirectTo: "posts", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
