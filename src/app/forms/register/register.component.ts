import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular2-social-login";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  sub;

  constructor(public _auth: AuthService) { }

  ngOnInit() {
  }

  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  //user data
                  //name, image, uid, provider, uid, email, token (returns tokenId for google, accessToken for Facebook, no token for linkedIn)
                }
    )
  }

}
