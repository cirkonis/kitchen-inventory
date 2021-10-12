export interface Message {
  message: string;
}

export interface Item {
  id: string;
  name: string;
  stock: number;
  unit: string;
  threshold: number;
  orderAmount: number;
  status: Statuses;
  category: Categories;
  updatedStockStatus?: UpdateStockStatuses;
  updatedStockValue?: number;
}

export enum Categories {
  SNACK = 'SNACK-BOI',
  DRINK = 'Drinky Drink :)',
  UTILITIY = 'Other Usefull Kinda Thing',
  UNDETERMINED = 'UNDETERMINED',
}

export enum Statuses {
  UNDER = 'NEEDS-ORDERING',
  ENOUGH = 'ALL-GOOD',
  ON_ORDER = 'ON-ORDER-LIST',
  ON_THE_WAY = 'ORDERED-AND-COMING',
  UNDETERMINED = 'UNDETERMINED',
}

export enum UpdateStockStatuses {
  REDUCED = 'REDUCED',
  INCREASED = 'INCREASED',
  UNCHANGED = 'UNCHANGED',
}
