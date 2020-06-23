import { Injectable } from '@angular/core';
import axios from 'axios';

export type Todo = {
  title: string,
  id: string,
  userId: string,
  completed : boolean
}
@Injectable({
  providedIn: 'root'
})
export class TODOsService {
  APIUrl = "https://jsonplaceholder.typicode.com/todos";
  constructor() { }

  getAllTodos() : Promise<Todo[]> {
    return axios.get(this.APIUrl)
      .then( res => res.data)
  }

  getTodoById(id : string) : Promise<Todo> {
    return axios.get(`${ this.APIUrl}/${id}`)
      .then( res => res.data)
  }
}
