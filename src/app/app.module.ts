import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductSearchingPipe } from 'src/pipes/product-searching.pipe';
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

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchingPipe,
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
