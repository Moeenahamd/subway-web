
export interface Header{
    appLogo:string,
    address:string,
    cartLogo:string,
    cartItems:number,
    navElements:[
        {
            name:string,
            route:string
            subitem: [
                {
                    name:string,
                    route:string
                }
            ] 
        }
    ]
}