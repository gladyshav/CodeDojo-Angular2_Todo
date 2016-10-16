import { Component } from '@angular/core';
import { TodoFormComponent } from './todo/todo-form.component';
import { TodoListComponent } from './todo/todo-list.component';
import { Todo } from './todo/todo';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    //template: `<h1> Angular 2 </h1>`,
    styleUrls: ['./app/app.component.css'],
    directives: [TodoFormComponent, TodoListComponent]
})

export class AppComponent {
    title: string;
    //todos: string[];
    todos: Todo[];

    constructor() {
        this.title = 'Angular 2Do';
        this.todos = [
        
        ];
    }
  
    //addTodo(title: string) {  
    onTodoAdded(todo: Todo) {  
        //console.log('Добавление задачи:' + title);     
        //this.todos.push(title);
        this.todos.push(todo);
    }
}