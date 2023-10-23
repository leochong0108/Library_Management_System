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
  //url: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch data from the backend when the component initializes
    this.fetchData();
  }

  fetchData() {
    // Make an HTTP GET request to your backend API endpoint
    this.http.get<any>('https://localhost:7205/api/Books/GetAll')
      .subscribe(data => {
        this.book = data;
        // Assuming the response is an array of books
      });
  }

  get filteredBook() {
    if (!this.searchText) {
      return this.book;
    }

    const searchTerm = this.searchText.toLowerCase();

    return this.book.filter((item: any) => {
      if (this.searchByCategory) {
        return item.category_Id.toString().toLowerCase().includes(searchTerm);
      } else {
        return item.book_Title.toLowerCase().includes(searchTerm);
      }
    });
  }
}
