import { NgModule } from '@angular/core';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
    declarations:[UserHomeComponent],
    imports: [UserRoutingModule, ],
    exports: []
})
export class UserModule {

}