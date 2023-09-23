import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../services/categories.service";
import {Category} from "../models/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // @ts-ignore
  categoryArray: { id: string, data: { category: string } }[];

  // @ts-ignore
  formCategory: string;

  // @ts-ignore
  formStatus: string = 'Add';

  // @ts-ignore
  categoryId: string;

  constructor(private cs: CategoriesService) {
  }

  onSubmit(formData: any) {
    let categoryData: Category = {
      category: formData.value.category
    }

    if(this.formStatus == 'Add') {
      this.cs.saveData(categoryData);
      formData.reset();
    } else if(this.formStatus == 'Edit') {
      this.cs.updateData(this.categoryId, categoryData);
      this.formStatus = 'Add';
      formData.reset();
    }
  }

  onEdit(category: any, id: any) {
    this.formStatus = 'Edit'
    this.formCategory = category;
    this.categoryId = id;
  }

  onDelete(id: string) {
    this.cs.deleteData(id);
  }

  ngOnInit() {
    this.cs.loadData().subscribe(val => {
      let filtered: any = [];

      for (const valElement of val) {
        // @ts-ignore
        if (valElement.data.category) {
          filtered.push(valElement);
        }

      }

      this.categoryArray = filtered;
    });
  }


}
