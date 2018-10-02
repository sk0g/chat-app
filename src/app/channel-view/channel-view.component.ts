import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


@Component({
    selector: 'app-channel-view',
    templateUrl: './channel-view.component.html',
    styleUrls: ['./channel-view.component.css']
})
export class ChannelViewComponent implements OnInit {
    group: String;
    channel: String;

    constructor(private route: ActivatedRoute,
                private http: Http) { }

    ngOnInit() {
        this.group = this.route.snapshot.paramMap.get('name');
        this.channel = this.route.snapshot.paramMap.get('channel');
        console.log(this.group, this.channel);
    }

    delete_channel() {
        return this.http.delete("http://localhost:4200/" + this.group);
    }
};
