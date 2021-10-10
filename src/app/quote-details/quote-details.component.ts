import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Quote;
  @Output() isRead = new EventEmitter<boolean>(){
    deleteQuote(read:boolean){
      this.isRead.emit(read)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
function deleteQuote(read: any, boolean: any) {
  throw new Error('Function not implemented.');
}

function read(read: any, boolean: any) {
  throw new Error('Function not implemented.');
}

function constructor() {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

