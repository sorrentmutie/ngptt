import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProvaVeloceComponent } from '../prova-veloce/prova-veloce.component';

@Component({
  selector: 'app-welcome',
  template: `
    <p>
      welcome works!
    </p>
    <button class="btn btn-info" (click)="navigate()">Naviga</button>
    <button class="btn btn-info" (click)="login()">Login</button>

    <div #hello></div>
    <hr/>
    <button (click)="create()">Add to DOM</button>
    <div>Questo è il primo span</div>
    <ng-container #vc></ng-container>
    <div>Questo è il secondo span</div>

    <ng-template #tpl>
      <div>Questo è lo span dentro il template</div>
    </ng-template>

    <hr/>
    <ng-container #cont></ng-container>

  `,
  styles: ``
})
export class WelcomeComponent implements AfterViewInit {
    
    isLogged = false;
    @ViewChild('hello', {static: false}) divHello: ElementRef | any;
    @ViewChild('vc', {static: false, read: ViewContainerRef}) vc: ViewContainerRef | any;
    @ViewChild('tpl') tpl: TemplateRef<any> | any;
    @ViewChild('cont', {static: false, read: ViewContainerRef}) cont: ViewContainerRef | any;


    constructor(private router: Router, private authService: AuthService){

    }
  ngAfterViewInit(): void {
    
  }
    navigate(){
        this.router.navigate(['random']);
    }

    create(){
      this.divHello.nativeElement.innerHTML = 'Hello da Salvatore';
      const view = this.tpl.createEmbeddedView(null);
      this.vc.insert(view);
      this.cont.createComponent(ProvaVeloceComponent);
    }

    login(){
      this.authService.login().subscribe(
        isLogged => {
         this.isLogged = isLogged;
        }
      );
    }
}
