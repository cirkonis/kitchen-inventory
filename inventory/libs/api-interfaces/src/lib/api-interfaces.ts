export interface Message {
  message: string;
}

export interface Item {
  id: string;
  name: string;
  stock: number;
  unit: Units;
  threshold: number;
  orderAmount: number;
  status: Statuses;
  category: Categories;
}

export enum Categories {
  SNACK = 'SNACK-BOI',
  DRINK = 'DRINK-BOI',
  UTILITIY = 'UTIL-BOI',
}

export enum Statuses {
  UNDER = 'NEEDS-ORDERING',
  ENOUGH = 'ALL-GOOD',
  ON_ORDER = 'ON-ORDER-LIST',
  ON_THE_WAY = 'ORDERED-AND-COMING',
}
export enum Units {
  SINGLE = 'One of these',
  DOUBLE = 'Two of these',
  FOUR_PACK = 'Four of These',
  SIX_PACK = 'Six of these',
  FRAME_8 = 'Eight of these',
  FRAME_12 = '12 of these',
  FRAME_18 = '18 of these',
  FRAME_24 = '24 of these',
  FRAME_36 = '36 of these',
}
