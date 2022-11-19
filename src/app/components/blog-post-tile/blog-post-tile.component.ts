import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { BlogPost } from 'src/app/blog-post';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostTileComponent implements OnInit {

  @Input() post !: BlogPost;
  fullSummary !: string
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary
    this.post.summary = this.truncatePipe.transform(this.post.summary, 500)
  }

  showFullSummary() {
    this.post.summary = this.fullSummary
  }

  toggleFav() {
    this.post.isFav =! this.post.isFav
  }

}
