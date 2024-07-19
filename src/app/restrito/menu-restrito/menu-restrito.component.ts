import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrls: ['./menu-restrito.component.css']
})
export class MenuRestritoComponent {

  constructor(
    private router: Router,
    private _loginService: LoginService

  ){}

  logout(){
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this.router.navigate(['/login']);

  }
}
