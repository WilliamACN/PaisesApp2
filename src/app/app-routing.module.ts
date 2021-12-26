import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByPaisComponent } from './pais/pages/by-pais/by-pais.component';
import { RegionComponent } from './pais/pages/region/region.component';
import { CapitalComponent } from './pais/pages/capital/capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  { path: '', component: ByPaisComponent, pathMatch: 'full' },
  { path: 'region', component: RegionComponent,},
  { path: 'capital', component: CapitalComponent,},
  { path: 'pais/:id', component: VerPaisComponent,},
  { path: '**',redirectTo: '',}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
