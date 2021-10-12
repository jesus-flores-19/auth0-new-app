import { Component, OnInit, Inject} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  ususarioLogg= new Promise<boolean>((resolve, reject) => {
    this.auth.isAuthenticated$.subscribe((data) => resolve(data))
  });

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { 
    
  }

  ngOnInit(): void {
  }

}
