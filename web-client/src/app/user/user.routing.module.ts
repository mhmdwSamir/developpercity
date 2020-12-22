import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { UserHomeComponent } from './user-home/user-home.component';
const routes: Route[] = [
    {
        path: '', component: UserHomeComponent,
        children: [
            { path: '', component: UserComponent }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {

}