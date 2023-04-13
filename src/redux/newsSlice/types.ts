export type TItems = {
  by: string;
  descendants: number;
  id: string;
  kids: number[];
  score: number;
  time: Date;
  title: string;
  type: string;
  url: string;
};

export type TNewsSlice = {
  items: TItems[];
};
