import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-channel-view',
    templateUrl: './channel-view.component.html',
    styleUrls: ['./channel-view.component.css']
})
export class ChannelViewComponent implements OnInit {
    group: String;
    channel: String;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.group = this.route.snapshot.paramMap.get('name');
        this.channel = this.route.snapshot.paramMap.get('channel');
        console.log(this.group, this.channel);
    }

    delete_channel() {
        console.log("deleting channel");
    }
};
