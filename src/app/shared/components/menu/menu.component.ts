
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from './menu.interfcae';

@Component({
  selector: 'app-menu',
  template: `
  <ng-content select="[firstClass]"></ng-content>
  <ng-container *ngTemplateOutlet="greet"></ng-container>
  <ng-template #greet><span>Hello</span></ng-template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        @for( listItem of menuList; track listItem.label) {
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="{{listItem.link}}">{{listItem.label}}</a>
          </li>
        }
        <li class="nav-item nav-link">{{counter}}
        </li>
        </ul>
      </div>
    </div>
  </nav>
  <ng-content select="[secondClass]"></ng-content>
    <button (click)="refreshList()"> Refresh </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  @Input() menuList: IMenuItem[] = [];
  counter: number = 0;

  ngOnInit(): void {
    setInterval(()=> {
      this.counter += 1;
    }, 1000)
  }

  refreshList() {
    this.cdr.detectChanges();
  }
}
