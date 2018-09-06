import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GroupListService {
    getChatGroups(): string[] {
        return ["Room1", "Room2"];
    }


    constructor() { }
}
