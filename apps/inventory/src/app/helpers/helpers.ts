import { Statuses } from '@inventory/api-interfaces';

export function evaluateStatus(
  status: Statuses,
  stock: number,
  threshold: number
): Statuses {
  if (status !== Statuses.ON_ORDER && status !== Statuses.ON_THE_WAY) {
    return stock < threshold ? Statuses.UNDER : Statuses.ENOUGH;
  } else {
    return status;
  }
}
