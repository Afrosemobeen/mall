import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[]=[
  new Recipe('A test recipe','This is simply a test','https://static.toiimg.com/photo/msid-77563051/77563051.jpg?471818'),
  new Recipe('A test recipe','This is simply a test','https://cookieandkate.com/images/2021/12/enchiladas-christmas-recipe-4.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
