import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://static.smaker.pl/photos/6/3/4/634320b0d13462d3176f0896942fa7f0_110705_57b32fe3190aa_wm.jpg'),
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://static.smaker.pl/photos/6/3/4/634320b0d13462d3176f0896942fa7f0_110705_57b32fe3190aa_wm.jpg'),
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://static.smaker.pl/photos/6/3/4/634320b0d13462d3176f0896942fa7f0_110705_57b32fe3190aa_wm.jpg'),
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://static.smaker.pl/photos/6/3/4/634320b0d13462d3176f0896942fa7f0_110705_57b32fe3190aa_wm.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
