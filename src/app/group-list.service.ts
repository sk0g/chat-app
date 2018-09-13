import { Injectable } from '@angular/core';
import { Group } from './group';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GroupListService {
    getChatGroups() {
        let headers = new HttpHeaders();
        let result = this.http.get("http://localhost:3000/group", {headers});
        console.log(result);
        return(result);
    }

    constructor(private http: HttpClient) { }
}
