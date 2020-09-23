import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';



@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() selectedTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  sendTodo(e): void {
    this.selectedTodo.emit(this.todo);
  }

}
