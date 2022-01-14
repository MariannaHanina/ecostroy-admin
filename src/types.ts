export type TButton = {
  text: string;
  callback?: () => void;
};

export type TTextMedia = {
  _id?: string;
  title: string;
  link?: string;
  intro?: string;
  text?: string;
  image?: string;
  video?: string;
  button?: TButton;
}