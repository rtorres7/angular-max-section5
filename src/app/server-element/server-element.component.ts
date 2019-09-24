import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ContentChild,
  ElementRef
} from '@angular/core';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { ConsoleReporter } from 'jasmine';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  // @Input()
  //   element: {type: string, name: string, content: string};

  // above using alias
  // tslint:disable-next-line: no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('text content: ' + this.header.nativeElement.textContent);
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterContentInit called!');
    console.log('text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
