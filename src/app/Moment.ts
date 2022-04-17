export interface Moment {
  id?: number;
  title: string;
  description: string;
  image: string;
  created_at?: string;
  updated_at?: string;
  comments?: [{ text: string; username: string }];
}

// A interrogação "?" é pra deixar o preenchimento do campo opcional
