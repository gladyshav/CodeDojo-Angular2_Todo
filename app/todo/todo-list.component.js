"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_item_component_1 = require('./todo-item.component');
var TodoListComponent = (function () {
    function TodoListComponent() {
    }
    TodoListComponent.prototype.onTodoDeleted = function (todo) {
        //console.log(todo);
        if (todo) {
            var index = this.todos.indexOf(todo);
            if (index > -1) {
                this.todos.splice(index, 1);
            }
        }
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TodoListComponent.prototype, "todos", void 0);
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: './app/todo/todo-list.component.html',
            styleUrls: ['./app/todo/todo-list.component.css'],
            directives: [todo_item_component_1.TodoItem]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//import { Component } from '@angular/core';
//@Component({
//    selector: 'todo-list',
//    templateUrl: './app/todo/todo-list.component.html',
//    inputs: ['todos']
//})
//
//export class TodoListComponent{}
//# sourceMappingURL=todo-list.component.js.map