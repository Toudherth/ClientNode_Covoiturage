import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class CovoiturageService{

    private urlBase: string= 'http://localhost:8888/';

    constructor(private http: HttpClient) {}

    getCovoiturages(): Observable<any> {
        return this.http.get(this.urlBase+'covoiturages');  // cette methode elle renvoie un observable 
    }

    getCovoituragesVille(villedepart: string): Observable<any>  {
        console.log("je suis ciic  ========================");
        return this.http.get(`/covoiturages/${villedepart}`);
      }

    // Recherche  par nom 
    getCovoituragesParVilledepart(villedepart:any) : Observable<any>{
        return this.http.get(this.urlBase+'covoiturages/'+villedepart);
    }


    rechercher(villeDepart: string, villeArrivee: string, date: string, prixMax: number): Observable<any> {
        let url = `${this.urlBase}&villeDepart=${villeDepart}&villeArrivee=${villeArrivee}&date=${date}`;
        if (prixMax) {
          url += `&prixMax=${prixMax}`;
        }
        return this.http.get(url);
      }
}





  
    // getProduitsParCategorie(categorie:any): Observable<any> {
    //     return this.http.get(this.urlBase+'produits/'+categorie);
    // }

    // getCategories(): Observable<any> {
    //     return this.http.get(this.urlBase+'categories');
    // }