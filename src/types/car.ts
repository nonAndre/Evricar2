export type Car = {
    id: number,
    logoPath: string,
    name: string,
    model: string,
    desktopImage:string,
    description:string,
    inside:string;
    photo: string,
    length: number,
    height: number,
    width: number,
    price: number,
    horsePower:number
};

export type UsersOrders={
    idUser:string | undefined ,
    mail: string | null | undefined ,
    userName: string | undefined,
    orders : Orders[]
}

export type Orders = {
    idOrder: string,
    brand: string | undefined;
    model: string | undefined;
    optional: {
        color: string | null;
        seat: string | null;
        circle: string | null;
    };
    price: number,
    photo:string,
    isReady:boolean
};



export type CustomizationOptions = {
  color: string | null;
  seat: string | null;
  circle:string | null;
};

export type ReadyOrdersResult = {
  hasReadyOrders: boolean;
  readyOrders: Orders[];
};