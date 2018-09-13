import { Component, OnInit } from '@angular/core';
import { GroupListService } from '../group-list.service';
import { Group } from '../group';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-group-details',
    templateUrl: './group-details.component.html',
    styleUrls: ['./group-details.component.css']
})

export class GroupDetailsComponent implements OnInit {
    chat_group: Group;
    name: String;
    router;

    constructor(private _groupListService: GroupListService,
                private route: ActivatedRoute) { }

        ngOnInit() {
            this.router = Router;
            this.name = this.route.snapshot.paramMap.get('name');
            this._groupListService
                .getChatGroup(this.name)
                .subscribe((group: Group) => {
                    this.chat_group = group['group'];
        });
    }

    delete_group(group_name) {
        console.log("starting delete");

        this._groupListService
            .deleteChatGroup(group_name)
            .subscribe(result => {
                console.log(result);
            });

        this.router.navigateByUrl('/group-list/');
    }

};
