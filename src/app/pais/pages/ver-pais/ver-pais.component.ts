import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap,tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: any;

  constructor(private activatedRoute : ActivatedRoute, private paisServ:PaisService) { 
  }

  ngOnInit(): void {
    
    // this.activatedRoute.params.pipe(
    //   switchMap(({id})=> this.paisServ.getPaisByAlpha(id)),
    //   tap(console.log)
    //   ).subscribe((res)=>{
    //     this.pais = res;
    // })
  
    this.activatedRoute.params.subscribe(({id})=>{
      console.log('param: ', id);
      this.paisServ.getPaisByAlpha(id).subscribe((pais:Country)=>{
        console.log('pais: ', pais);
        this.pais = pais;
      })
    })
  }

}
