import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-by-pais',
  templateUrl: './by-pais.component.html',
  styles: [
  ]
})
export class ByPaisComponent implements OnInit {

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
    this.paisServ.getPais(this.termino).subscribe((paises:Country[])=>{
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
