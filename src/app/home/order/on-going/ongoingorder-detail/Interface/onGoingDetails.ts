export interface onGoingDetails {
  confirmed_table__date: string;
  confirmed_table__groups__rating: string;
  confirmed_table__groups:string;
  confirmed_table__groups__title: string;
  confirmed_table__table_booked__table_num: string;
  items: itemdetails[];
  order_number: string;
  total_price: string;
}
  export interface itemdetails {
    item: string;
    price: number;
    quantity:number;
  }