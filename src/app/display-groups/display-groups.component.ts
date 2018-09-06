import { Component, OnInit } from '@angular/core';
import { GroupListService } from '../group-list.service';

@Component({
    selector: 'app-display-groups',
    templateUrl: './display-groups.component.html',
    styleUrls: ['./display-groups.component.css']
})

export class DisplayGroupsComponent implements OnInit {
    chat_groups: string[];

    constructor(private _groupListService: GroupListService) { }

    ngOnInit() {
        this.chat_groups = this._groupListService.getChatGroups();
    }

}
