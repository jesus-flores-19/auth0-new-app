import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: [
  ]
})
export class ProtegidaComponent implements OnInit {

  UsuarioInfo = new Promise<Object>((resolve, reject) =>{
    this.auth.user$.subscribe((data: any) => {
      console.log(data);
      resolve(data)
    })
  });

  constructor(public auth: AuthService) { 
    this.UsuarioInfo
  }

  ngOnInit(): void {
  }

}
