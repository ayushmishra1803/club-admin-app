export interface request {
  created_at: string;
  date: string;
  group_detail: group_detail1[];
  groups_id: string;
  has_requested: string;
  is_confirmed: string;
  num_females: number;
  num_males: number;
  num_others: number;
  per_day_id: string;
  table_booked_id: string;
  updated_at: string;
  uuid:string;

}
export interface group_detail1 {
  created_at: string;
  created_by_id: string;
  title: string;
  updated_at: string;
  uuid:string;
}