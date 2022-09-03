export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Comapny;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  };
}

export interface Comapny {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  balance: string;
  picture: string;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
}
