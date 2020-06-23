import { Component } from '@angular/core';
import { Todo, TODOsService } from 'src/app/services/todos.service';

@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent  {
  todos: Todo[] = [];

  constructor(private todoservices: TODOsService) {
    this.loadTodos()
  }

  async loadTodos(): Promise<void> {
    const allTodos = await this.todoservices.getAllTodos();

    console.log({allTodos});

    this.todos = allTodos;
  }

}
