import { Component, OnInit } from '@angular/core';
import { GroupListService } from '../group-list.service';
import { Group } from '../group';

@Component({
    selector: 'app-display-groups',
    templateUrl: './display-groups.component.html',
    styleUrls: ['./display-groups.component.css']
})

export class DisplayGroupsComponent implements OnInit {
    chat_groups: Group[];

    constructor(private _groupListService: GroupListService) { }

    ngOnInit() {
        this._groupListService
            .getChatGroups()
            .subscribe((groups: Group[]) => {
                console.log(groups);

            this.chat_groups = groups['groups'];
        });
        console.log(this.chat_groups);
    }

    add_group(group_name) {
        this._groupListService
            .createChatGroup(group_name)
            .subscribe(result => {
                console.log(result);
            });
    }
};
