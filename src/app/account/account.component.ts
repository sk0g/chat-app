import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        if (typeof(Storage) != "undefined" && localStorage.getItem("username") !== null) {
            console.log(localStorage.getItem("username") + " is the username");
        } else {
            alert("Either your storage is not working, or the username is not set. Fix pls.");
        }
    }
}
