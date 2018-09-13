import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DisplayGroupsComponent } from './display-groups/display-groups.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { ChannelViewComponent } from './channel-view/channel-view.component';

@NgModule({
    declarations: [
        AppComponent,
        AccountComponent,
        LoginComponent,
        DisplayGroupsComponent,
        GroupDetailsComponent,
        ChannelViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
