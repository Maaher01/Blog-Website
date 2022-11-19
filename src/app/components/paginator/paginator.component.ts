import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() numberOfPages !: number
  pages !: number[]
  @Output() pageNumberClick = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
    this.pages =  new Array(this.numberOfPages)
  }

  pageNumberClicked(pageNumber : number) {
    this.pageNumberClick.emit(pageNumber)
  }

}
