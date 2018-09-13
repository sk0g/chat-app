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
        return(result);
    }

    getChatGroup(name: String) {
        let result = this.http.get("http://localhost:3000/group/" + name);
        console.log(result);
        return(result);
    }

    deleteChatGroup(name: String) {
        return this.http.delete("http://localhost:3000/group/" + name);
    }

    createChatGroup(name: String) {
        return this.http.post("http://localhost:3000/group/", {name: name});
    }

    constructor(private http: HttpClient) { }
}
