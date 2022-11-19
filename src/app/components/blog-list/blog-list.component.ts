import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';
import { BlogPost } from 'src/app/blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

    blogPosts !: BlogPost[][]
    currentPage !: number
    
    @ViewChildren('tile') blogPostTileComponents !: QueryList<BlogPostTileComponent>

    constructor(private blogDataService: BlogDataService) {}

    ngOnInit() {
        this.currentPage = 0
        this.blogPosts = this.blogDataService.getData()
    }

    updatePage(newPage: number) {
        this.currentPage = newPage
    }

    expandAll() {
        this.blogPostTileComponents.forEach(e => e.showFullSummary())
    }

    favAll() {
        this.blogPosts[this.currentPage] = this.blogPosts[this.currentPage].map(
            post=>({
                title: post.title,
                summary: post.summary,
                isFav: true
            })
        )
    }
            
}
