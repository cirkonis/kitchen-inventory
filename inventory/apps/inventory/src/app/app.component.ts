import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Message } from '@inventory/api-interfaces';
// import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'inventory-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // hello$ = this.http.get<Message>('/api/hello');
  // constructor(private http: HttpClient, private apollo: Apollo) {}
  //
  // items: any[] = [];
  //
  // ngOnInit() {
  //   this.apollo
  //     .watchQuery({
  //       query: gql`
  //         {
  //           helloWorld
  //         }
  //       `,
  //     })
  //     .valueChanges.subscribe((result: any) => {
  //       console.log(result);
  //     });
  //
  //   console.log(this.hello$.subscribe((x) => x));
  // }
}
