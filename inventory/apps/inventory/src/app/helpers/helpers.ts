import { Statuses } from '@inventory/api-interfaces';

export function evaluateStatus(stock: number, threshold: number): Statuses {
  return stock < threshold ? Statuses.UNDER : Statuses.ENOUGH;
}
