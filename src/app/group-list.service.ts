import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GroupListService {
    getChatGroups(): string[] {
        return ["Group1", "Group2"];
    }


    constructor() { }
}
