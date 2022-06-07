export class Aricle {
    titre: string;
    description: string;
    createdDate: Date;
    image1: string;
    image2: string;
    image3: string;
    
    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
      this.titre = title;
      this.description = description;
      this.image1 = imageUrl;
      this.image2 = imageUrl;
      this.image3 = imageUrl;
      this.createdDate = createdDate;
    }
  }