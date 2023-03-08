export interface ICode {
  id: number;
  name: string;
  data: string;
  type: string;
  date: Date;
}

export interface IText {
  name: string;
}

export interface IMail {
  to?: string;
  subject?: string;
  body?: string;
}

export interface ISMS {
  to?: string;
  body?: string;
}

export interface IWiFi {
  networkTyp?: string;
  name?: string;
  password?: string;

  // ! exist more
}

export interface IPhone {
  // TODO
}

export interface IEvent {
  // TODO:
}

export interface ILocation {
  // TODO:
}

export interface IVCard {
  // TODO:
}
