import { Component, HostListener,OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'LH Games';
  mostraMenu:boolean = true;

  constructor(private _loginService:LoginService){}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnInit() {
    this._loginService.getmostraMenu().subscribe(res => {this.mostraMenu = res;

    })
    
  }
  ngOnDesroy() {
    localStorage.clear();
  }
}
