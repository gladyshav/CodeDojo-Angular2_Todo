import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo/todo-item.component.html',
    styleUrls: ['./app/todo/todo-item.component.css']
})

/**
 * TodoItem
 */
export class TodoItem {
    //constructor(parameters) {
    //    
    //}
    @Input() todo: Todo;
    @Output() deleted = new EventEmitter();

    toggleDone(){
        this.todo.done = !this.todo.done;
    }
    delete(){
        //console.log("delete", this.todo);
        this.deleted.emit(this.todo);
    }
}

