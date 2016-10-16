
import { Component, Input } from '@angular/core';
import { TodoItem } from './todo-item.component';
import { Todo } from './todo';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html',
    styleUrls: ['./app/todo/todo-list.component.css'],
    directives: [ TodoItem ]
})

export class TodoListComponent{
    //@Input() todos: string[];
    @Input() todos: Todo[];

    onTodoDeleted(todo: Todo){
        //console.log(todo);
        if(todo){
            let index = this.todos.indexOf(todo);
            if(index > -1){
                this.todos.splice(index, 1);
            }
        }
    };
}


//import { Component } from '@angular/core';

//@Component({
//    selector: 'todo-list',
//    templateUrl: './app/todo/todo-list.component.html',
//    inputs: ['todos']
//})
//
//export class TodoListComponent{}

