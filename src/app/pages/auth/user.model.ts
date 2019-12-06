export interface Auth {
    firstName:string;
    lastName:string;
    address:string;
    pointOfInterest:string[];
}

export interface User extends Auth{
    id:string;
    profilPicture?:string;
}