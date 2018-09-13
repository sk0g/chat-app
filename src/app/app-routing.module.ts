import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';

import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { DisplayGroupsComponent } from './display-groups/display-groups.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { ChannelViewComponent } from './channel-view/channel-view.component';

const routes:Routes = [
    {path:''           , redirectTo:'login', pathMatch        :'full'},
    {path:'login'      , component :         LoginComponent          },
    {path:'account'    , component :         AccountComponent        },
    {path:'group-list' , component :         DisplayGroupsComponent  },
    {path:'group/:name', component :         GroupDetailsComponent   },
    {path:'group/:name/:channel', component: ChannelViewComponent    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule
    ],

    exports: [RouterModule]
})
export class AppRoutingModule { }
