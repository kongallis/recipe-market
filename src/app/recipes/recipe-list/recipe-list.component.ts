import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
     'https://assets.bonappetit.com/photos/57ad3f9cf1c801a1038bcadf/master/pass/grilled-sliced-brisket.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
