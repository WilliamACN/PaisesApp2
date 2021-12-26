import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { ByPaisComponent } from './pages/by-pais/by-pais.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    CapitalComponent,
    ByPaisComponent,
    RegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    CapitalComponent,
    ByPaisComponent,
    RegionComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
