import { Component, OnInit } from '@angular/core';
import { AnnonceType } from 'src/app/annonce/models/annonce-type.model';
import { AnnonceItem } from 'src/app/annonce/models/annonce-item.model';
import { AnnonceService } from 'src/app/annonce/services/annonce.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  type = AnnonceType.ALIMENTAIRE;
  foodForm: FormGroup;

  constructor(private annonceService: AnnonceService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.foodForm = this.formBuilder.group({
      titre:['',[Validators.required]],
      lieu:['',[Validators.required]],
      prix:['',[Validators.required]],
      nbColoc:['',[Validators.required]]
    });
  }
  
  onSubmit(){
    const annonce:AnnonceItem = {
      id:timestamp.toString(),
      note:null,
      name:this.foodForm.get('titre').value,
      description:null,
      imagePath:null,
      type:AnnonceType.COLOCATAIRE,
      prix:this.foodForm.get('prix').value
    };
    this.annonceService.add(annonce).then(
      () => {
        console.log("création de l'annonce reussi");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  open(item: AnnonceItem) {
    
  }

}
