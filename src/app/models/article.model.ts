import { User } from "./user.model";

export class Article {
    id : number;
    titre: string;
    createdDate: Date;
    image1: string;
    image2: string;
    image3: string;
    //vendeur : User;

    taille :number;
    puissance : number;
    viseur : boolean;
    cap_chargeur : number;
    etat : string;
    custom : boolean;
    munitions : number;
    prix : number;
    
    constructor(id : number, title: string, imageUrl: string, createdDate: Date, /*user : User,*/taille : number, puissance : number,viseur : boolean,cap_chargeur : number,etat : string,custom : boolean,munitions : number,prix : number) {
        this.id = id; 
        this.titre = title;
        this.image1 = imageUrl;
        this.image2 = imageUrl;
        this.image3 = imageUrl;
        this.createdDate = createdDate;
        //this.vendeur = user;
        this.taille = taille;
        this.puissance = puissance;
        this.viseur = viseur;
        this.cap_chargeur = cap_chargeur;
        this.etat = etat;
        this.custom = custom;
        this.munitions = munitions;
        this.prix = prix;
    }
  }