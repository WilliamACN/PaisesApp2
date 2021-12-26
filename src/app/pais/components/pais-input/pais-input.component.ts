import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: []
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter    : EventEmitter<string> = new EventEmitter()
  @Output() onDebounce : EventEmitter<string> = new EventEmitter()

  @Input() placeholder :string = "";

  debouncer : Subject<string> = new Subject();

  termino : string = "" ;

  constructor() { }

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe(value =>{
      this.onDebounce.emit(value)
      console.log('value: ', value);
    })
  }

  teclaPresionada(event : any){
    const valor = event.target.value;
    this.debouncer.next(this.termino)
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

}
