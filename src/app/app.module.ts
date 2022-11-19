import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './components/blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { BlogDataService } from './services/blog-data.service';
import { HighlightDirective } from './custom/highlight.directive';
import { CardComponent } from './components/card/card.component';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent,
    HighlightDirective,
    CardComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TruncatePipe,
    BlogDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
