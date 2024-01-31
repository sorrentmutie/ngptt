import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Product } from '../../../products/models/product';
import { catchError, combineLatest, delay, forkJoin, from, 
    interval, map, merge, of, take, debounceTime, debounce, filter, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PlaceholderPost, PlaceholderUser } from '../../../placeholder/models/placeholder';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      footer works!
    </p>
    <input type="text" [formControl]="myInput" /> 


  `,
  styles: ``
})
export class FooterComponent {
   private http = inject(HttpClient);
   myInput = new FormControl('');
   myInput$ = this.myInput.valueChanges;
   urlUsers = "https://jsonplaceholder.typicode.com/users";
   urlPosts = "https://jsonplaceholder.typicode.com/posts";
  
   myUsers$ = this.http.get(this.urlUsers)
   .pipe( delay(3000));

   myPosts$ = this.http.get(this.urlPosts)
   .pipe(delay(2000));

  //  myObs = merge(this.myUsers$, this.myPosts$, this.myInput$,
  //    interval(10000))
  //     .subscribe(data =>console.log(data))


  // myObs = combineLatest([this.myUsers$, this.myPosts$, this.myInput$,
  //   interval(10000)])
  //    .subscribe(data =>console.log(data))

  // myObs= forkJoin([this.myUsers$, this.myPosts$, 
  //    interval(4000).pipe(take(5))])
  // .subscribe(data =>console.log(data))

constructor(){

  this.myInput.valueChanges
  .pipe(
   debounceTime(1000),
   switchMap(  (value: string | null)  => {
    const url = `${this.urlUsers}?q=${value}`;
    return this.http.get<PlaceholderUser[]>(url)
   }))
   .subscribe(data => console.log(data)

  )}
//     .subscribe(data =>{
//       const url = `${this.urlUsers}?q=${data}`;
//       this.http.get<PlaceholderUser[]>(url)
//       .subscribe(data => console.log(data));
//     });
// }






 // myInput$.subscribe(data => console.log(data);


myObs = forkJoin([this.myUsers$, this.myPosts$])
  .subscribe(res => {
     const posts = res[1] as PlaceholderPost[];
     const users = res[0] as PlaceholderUser[];
      users.forEach(u => u.posts = posts.filter(p => p.userId === u.id));
      console.log(users);
      return users;
  })



}
