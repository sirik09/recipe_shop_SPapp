import { Component, OnInit } from '@angular/core';
import {  Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a test recipe',
    'this is simply a test',
    'https://cdn-image.foodandwine.com/sites/default/files/HD-201204-r-vinegar-braised-chicken-with-leeks-and-peas.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
