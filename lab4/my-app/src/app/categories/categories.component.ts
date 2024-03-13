import { Component } from '@angular/core';
//import { categories } from 'src/app/category.ts';
import {categories} from "../category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = categories;
}