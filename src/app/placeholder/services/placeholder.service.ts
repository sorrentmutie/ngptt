import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { PlaceholderPost, PlaceholderUser } from '../models/placeholder';
import { toObservable, toSignal} from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private http = inject(HttpClient);
  private usersUrl = "https://jsonplaceholder.typicode.com/users";
  private postsUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
  private users$ = this.http.get<PlaceholderUser[]>(this.usersUrl);
  users = toSignal(this.users$, { initialValue: []});
  selectedUserId = signal<number>(0);
  private userPosts$ = toObservable(this.selectedUserId)
  .pipe(
    switchMap(  (id:number) => this.http.get<PlaceholderPost[]>(this.postsUrl + id)
  ));
  userPosts = toSignal(this.userPosts$, { initialValue: []});

  setSelectedUserId(id: number){
    this.selectedUserId.set(id);
  }
}
