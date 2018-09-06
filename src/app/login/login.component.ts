import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    username: string = '';

    constructor(private router: Router, private forms: FormsModule) {

    }

    ngOnInit() {

    }

    loginUser(event) {
        event.preventDefault();

        if (this.username.length != 0) {
            this.router.navigateByUrl('/account');
        } else {
            alert("You have to enter a username!");
        }
    }
}
