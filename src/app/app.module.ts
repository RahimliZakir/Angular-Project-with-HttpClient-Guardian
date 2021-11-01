import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductSearcherPipe } from 'src/pipes/product-searcher.pipe';
import { ManatPipe } from 'src/pipes/manat.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { GoToTopComponent } from './go-to-top/go-to-top.component';
import { PostsComponent } from './posts/posts.component';
import { SanitaizerPipe } from 'src/pipes/sanitaizer.pipe';
import { PostSearcherPipe } from 'src/pipes/post-searcher.pipe';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { LoginGuard } from 'src/guards/login.guard';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CategorySearcherPipe } from 'src/pipes/category-searcher.pipe';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSearcherPipe,
    ManatPipe,
    SidebarComponent,
    FooterComponent,
    GoToTopComponent,
    PostsComponent,
    SanitaizerPipe,
    PostSearcherPipe,
    PostDetailsComponent,
    AddPostComponent,
    EditPostComponent,
    CategoriesComponent,
    ProductsComponent,
    CategorySearcherPipe,
    CategoryDetailsComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ProductDetailsComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
