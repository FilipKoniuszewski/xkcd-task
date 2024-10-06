export interface Comic {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

export type RootStackNavigatorParamsList = {
  Home: undefined;
  About: undefined;
  Details: { item: Comic };
};

export enum Screen {
  Home = "Home",
  About = "About",
  Details = "Details",
}
