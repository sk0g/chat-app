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
        console.log("Testing is DOM ready?");

        if (typeof(Storage) != "undefined") {
            // clear any existing username details, in case some old value is set.
            // why else would the user be arriving to /login?
            localStorage.removeItem('username');
            console.log("storage good to go");
        } else {
            alert("Local storage not available. Try using a browser from this century?");
        }


    }

    loginUser(event) {
        event.preventDefault();

        if (this.username.length != 0) {
            localStorage.setItem("username", this.username);
            this.router.navigateByUrl('/account');
        } else {
            alert("You have to enter a username!");
        }
    }
}
