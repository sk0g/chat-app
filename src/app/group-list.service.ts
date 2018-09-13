import { Injectable } from '@angular/core';
import { Group } from './group';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GroupListService {
    getChatGroups(): string[] {
        return ["Room1", "Room2"];
    }

    getChatGroupsJson() {
        let headers = new HttpHeaders()
                .append('Content-Type', 'application/json')
                .append('Access-Control-Allow-Headers', 'Content-Type')
                .append('Access-Control-Allow-Methods', '*')
                .append('Access-Control-Allow-Origin', '*');
        return this.http.get("http://localhost:3000/groups.json", {headers});
    }

    constructor(private http: HttpClient) { }
}
