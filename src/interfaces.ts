export interface IGlobalState {
   app: {
      activePage: string
   },
   mainPage: {
      isLoading: boolean,
      filters: {
         eyes?: string,
         clothes?: string,
         color?: string
      }
   },
   products: IProduct[]
}

export interface IProduct {
   id: number,
   title: string,
   image: string,
   price: number,
   label: null,
   eyes: string,
   color: string,
   clothes: string,
   status: null | string
}