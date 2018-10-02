import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'chat-app';
    loggedIn: boolean;

    ngOnInit() {
        var isLoggedIn = false;

        if (localStorage.getItem("username") !== null) {
            isLoggedIn = true;
        }

        this.loggedIn = isLoggedIn;
    }
}
