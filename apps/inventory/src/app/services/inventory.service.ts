import { Apollo, gql } from 'apollo-angular';
import { Item } from '@inventory/api-interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InventoryService {
  constructor(private apollo: Apollo) {}

  getItem(id: string): Observable<any> {
    const ITEM = gql`
      query GetItem($id: String!) {
        getItem(id: $id) {
          id
          name
          stock
          orderAmount
          category
          threshold
          status
        }
      }
    `;

    return this.apollo.watchQuery({
      query: ITEM,
      variables: { id: id },
    }).valueChanges;
  }

  listItems(): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        {
          listItems {
            id
            name
            unit
            stock
            orderAmount
            category
            threshold
            status
          }
        }
      `,
    }).valueChanges;
  }

  createItem(item: Item): Observable<any> {
    const ITEM = gql`
      mutation CreateItem($createItemArgs: ItemInput!) {
        createItem(createItemArgs: $createItemArgs) {
          id
          name
          stock
          orderAmount
          category
          threshold
          status
          unit
        }
      }
    `;

    return this.apollo.mutate({
      mutation: ITEM,
      variables: { createItemArgs: { item: item } },
    });
  }

  updateItem(item: Item): Observable<any> {
    const ITEM = gql`
      mutation UpdateItem($updateItemArgs: ItemInput!) {
        updateItem(updateItemArgs: $updateItemArgs) {
          id
          name
          stock
          orderAmount
          category
          threshold
          status
          unit
        }
      }
    `;

    return this.apollo.mutate({
      mutation: ITEM,
      variables: { updateItemArgs: { item: item } },
    });
  }

  deleteItem(id: string): Observable<any> {
    const ITEM = gql`
      mutation DeleteItem($id: String!) {
        deleteItem(id: $id) {
          id
          name
          stock
          orderAmount
          category
          threshold
          status
          unit
        }
      }
    `;

    return this.apollo.mutate({
      mutation: ITEM,
      variables: { id: id },
    });
  }
}
