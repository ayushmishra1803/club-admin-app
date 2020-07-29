export interface group_Details {
  created_at: string;
  created_by_id: string;
  members: member[];
  num_females: number;
  num_males: number;
  num_others: number;
  title: string;
  updated_at: string;
  uuid: string;
}
export interface member {
  created_at: string;
  email: number;
  first_name: string;
  gender: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: string;
  last_name: string;
  mobile: number;
  password: string;
  profile_path: string;
  ratings: number;
  updated_at: string;
  uuid:string;
}