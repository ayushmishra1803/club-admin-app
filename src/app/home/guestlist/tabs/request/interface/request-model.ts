export interface request {
  data: data[];
  
  // {
  //   created_at: string;
  //   email: string;
  //   first_name: string;
  //   gender: string;
  //   is_active: string;
  //   is_staff: string;
  //   is_superuser: string;
  //   last_login: string;
  //   last_name: string;
  //   mobile: number;
  //   password: string;
  //   profile_path: string;
  //   ratings: string;
  //   updated_at: string;
  //   uuid: string;
  // }
}
interface data{
  user_data:user_data1[]
  count:number;
}
interface user_data1 {
  created_at: string;
  email: string;
  first_name: string;
  gender: string;
  is_active: string;
  is_staff: string;
  is_superuser: string;
  last_login: string;
  last_name: string;
  mobile: number;
  password: string;
  profile_path: string;
  ratings: string;
  updated_at: string;
  uuid: string;
}
