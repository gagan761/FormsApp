import { Routes } from '@angular/router';
import { FormScreenComponent } from '../form-screen/form-screen.component';
import { SubItScreenComponent } from '../sub-it-screen/sub-it-screen.component';

export const routes: Routes = [

{
    path:   'formscreen',
    component: FormScreenComponent
},
{
    path:   'submitscreen',
    component: SubItScreenComponent
}

];
