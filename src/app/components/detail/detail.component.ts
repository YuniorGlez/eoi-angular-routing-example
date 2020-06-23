import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TODOsService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  todo: any = {};

  constructor(private route: ActivatedRoute, private todosService: TODOsService) {
    this.loadTodo();
   }

  async loadTodo(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.todo = await this.todosService.getTodoById(id);
  }


}
