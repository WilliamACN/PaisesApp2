import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent implements OnInit {

  public termino : string = "";
  public errorBusqueda : boolean = false; 
  paises : Country [] = [];

  constructor(private paisServ:PaisService) { }

  ngOnInit(): void {
  }

  buscar(event : string){
    this.termino = event;
    console.log(this.termino);
    this.errorBusqueda = false;
    this.paisServ.getCapital(this.termino).subscribe((paises:Country[])=>{
      console.log(paises);
      this.paises = paises;
    },(err)=>{
      this.errorBusqueda = true;
      this.paises = [];
    });

  }
  sugerencias(termino : string){
    this.errorBusqueda = false;
  }

}
