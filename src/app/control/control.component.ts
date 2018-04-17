import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Counter } from '../counter';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Input() counter:Counter;
  @Output() onReset:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {

  }
  onAddClick() {
  this.counter.currentValue++;
  }
  onSubstractClick(){
  this.counter.currentValue--;
  }
  onResetClick(){
    this.onReset.emit(true);
    }
    onSaveClick(){
      this.af.list("/counter").push({
        date: new Date(),
        counter: this.counter.currentValue
      });
    }
    //agregar boton remove
    onRemoveClick(){
      //elimino arreglo completo
      this.af.list("/counter").remove();
      
      /*con esto puedo eliminar un elemento de la lista
       this.af.list("/counter").remove()
       se le agrega el id del elemento a eliminar
       ;*/
    }
}
/*deleteTodo(todo: any): void {
  this.af.object('/todos/' + todo.$key).remove();
}*/
