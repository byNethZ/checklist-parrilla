import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Content = 'posts' | 'stories';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private jsonDataPosts = 'assets/items-post.json';
  private jsonDataStories = 'assets/items-stories.json';
  private apiURL: string = '';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(this.jsonDataPosts);
  }

  getStories(): Observable<any> {
    return this.http.get<any>(this.jsonDataStories);
  }

  storeApprover(approver: string) {}

  approvedItem(id: number, content: Content) {}

  rejectedItem(id: number, content: Content, observations: number[]) {}

  // Método para obtener los datos desde un endpoint de una API externa
  // Puedes modificar este método para hacer la llamada a la API externa
  // y cambiar el tipo de retorno según la estructura de la respuesta de la API.
  // getExternalData(): Observable<any> {
  //   const apiUrl = 'https://tu-api-externa.com/data'; // URL de la API externa
  //   return this.http.get<any>(apiUrl);
  // }

  getBusinessName(): string {
    return "Alberto's Tree Services";
  }
}
