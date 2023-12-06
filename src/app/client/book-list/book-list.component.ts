import { CategoryService } from './../service/category/category.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  book: any[] = [];
  searchText = '';
  searchByCategory = false;
  idToNameMapping: { [key: number]: string } = {};

  constructor(private http: HttpClient, private categoryService : CategoryService) {}

  ngOnInit() {
    // Fetch data from the backend when the component initializes
    this.fetchData();
    this.fetchCategoryData();
  }

  fetchData() {
    // Make an HTTP GET request to your backend API endpoint
    this.http.get<any>('https://localhost:7205/api/Books/GetAll')
      .subscribe(data => {
        this.book = data;
        // Assuming the response is an array of books
      });
  }

  fetchCategoryData() {
    // Make an HTTP GET request to fetch category data
    this.categoryService.getAllCategory()
      .subscribe((data) => {
        // Assuming the response is an array of categories with category_Id and category_name
        // Populate idToNameMapping and bookTypeOptions
        data.forEach((category: any) => {
          this.idToNameMapping[category.category_Id] = category.category_Name;
        });
      });
  }


  get filteredBook() {
    if (!this.searchText) {
      return this.book;
    }

    const searchTerm = this.searchText.toLowerCase();

    return this.book.filter((item: any) => {
      if (this.searchByCategory) {
        const categoryName = this.idToNameMapping[item.category_Id].toLowerCase();
        return categoryName.includes(searchTerm);
      } else {
        return item.book_Title.toLowerCase().includes(searchTerm);
      }
    });
  }
}
