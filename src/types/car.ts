export type Car = {
    id: number,
    logoPath: string,
    name: string,
    model: string,
    description:string,
    inside:string;
    photo: string,
    length: number
    height: number
    width: number
    price: number
};

export type UsersOrders={
    idUser:string | undefined ,
    mail: string | null | undefined ,
    userName: string | undefined,
    orders : Document[]
}

export type Orders = {
    idOrder: string,
    brand: string | undefined;
    model: string | undefined;
    optional: {
        color: string | null;
        seat: string | null;
    };
    price: number
};



export type CustomizationOptions = {
  color: string | null;
  seat: string | null;
};