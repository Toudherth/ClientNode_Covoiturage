import { Component, OnInit } from '@angular/core';
import { CovoiturageService } from '../covoiturages.service';
import { ActivatedRoute, Params } from '@angular/router';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-covoiturages',
  templateUrl: './covoiturages.component.html',
  styleUrls: ['./covoiturages.component.css']
})
export class CovoituragesComponent  implements OnInit{

  villedepart: string="";
  villeArrivee: string = "";
  date: string = "";
  prixMax: number = 0;


  public covoiturages : any[] = new Array();

  constructor( private route: ActivatedRoute, private covoituragesService : CovoiturageService){
   
  }

  ngOnInit(){  // ce que je dois faire quand le composant est initialise 
       this.route.params.subscribe((params :Params) => {
        console.log("Invocation du composant produits avec "+params["villedepart"]);
        if (params["villedepart"] !== undefined) {
            console.log("/covoiturages/"+params['villedepart']);
            this.covoituragesService.getCovoituragesParVilledepart(params["villedepart"]).subscribe(covoiturages => {
                this.covoiturages = covoiturages;
      });                     
        }
        else {
                // pour recuperer tout les produits 
          this.covoituragesService.getCovoiturages().subscribe(covoiturages=> this.covoiturages=
            covoiturages);
     
  }
    });

    

  }

  maFonction(): void {
    console.log('Ceci est ma fonction');
  }


  search(villedepart: string) {
    this.covoituragesService.getCovoituragesVille(villedepart).subscribe(data => {
      this.covoiturages = data;
    });
  }


 public rechercherCovoiturage(): void {
      console.log("Texte à afficher dans la console");
      console.log("je sis ici ***************************************************");
}
 



}


