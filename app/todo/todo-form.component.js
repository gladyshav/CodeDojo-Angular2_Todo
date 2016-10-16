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
var todo_1 = require('./todo');
var TodoFormComponent = (function () {
    function TodoFormComponent() {
        this.added = new core_1.EventEmitter();
    }
    TodoFormComponent.prototype.add = function (title) {
        if (title) {
            this.added.emit(new todo_1.Todo(title));
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoFormComponent.prototype, "added", void 0);
    TodoFormComponent = __decorate([
        core_1.Component({
            selector: 'todo-form',
            templateUrl: './app/todo/todo-form.component.html',
            styleUrls: ['./app/todo/todo-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TodoFormComponent);
    return TodoFormComponent;
}());
exports.TodoFormComponent = TodoFormComponent;
//# sourceMappingURL=todo-form.component.js.map