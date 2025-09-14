type PhoneNo = {
  num1: string | number;
  num2: string | number;
};

type Address = {
  city: string;
  state: string;
  pin_no: number;
  phone_no?: PhoneNo;
};

export type User = {
  uname: string;
  age: number;
  address?: Address;
};
