import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { DisplayGroupsComponent } from './display-groups/display-groups.component';

const routes:Routes = [
    {path:''          , redirectTo:'login', pathMatch        :'full'},
    {path:'login'     , component :         LoginComponent          },
    {path:'account'   , component :         AccountComponent        },
    {path:'group-list', component :         DisplayGroupsComponent  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }
