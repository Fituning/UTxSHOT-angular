import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  Array : Article[] = []

  constructor() { }

  getProducts() : Article[]{
    this.Array = [];
    this.Array.push(new Article(0,
                      "x-shot bateuse",
                      "../../assets/files/img/81W19bSDF2S._AC_SL1500_.jpg",
                      new Date(),
                      /*new User(),*/
                      60,
                      14,
                      false,
                      32,
                      "correct",
                      false,
                      48,
                      32.52
                    ))
    this.Array.push(new Article(1,
                    "x-shot sniper",
                    "../../assets/files/img/images.jpg",
                    new Date(),
                    /*new User(),*/
                    80,
                    20,
                    true,
                    10,
                    "correct",
                    true,
                    48,
                    14.98
                  ))
    return this.Array
  }

  getProduct (id : number): Article{
    return this.Array[id]
  }
}
