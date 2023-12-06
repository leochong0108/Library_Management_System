import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllBookService } from './all-book.service';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.scss']
})

export class AllBookComponent implements OnInit {

  book: any[] = [];
  searchText = '';
  searchByCategory = false;
  selectedBookType: string;
  selectedBook: any = {};

  idToNameMapping: { [key: number]: string } = {};
  bookTypeOptions: { value: string, label: string }[] = [];

  // bookTypeOptions = [
  //   { value: '1', label: 'Science and Nature' },
  //   { value: '2', label: 'Classics' },
  //   { value: '3', label: 'History' },
  //   { value: '4', label: 'Motivational' },
  //   { value: '5', label: 'Cooking' },
  //   { value: '6', label: 'Travel' },
  // ];

  newBook: any = {
    book_Id: '',
    book_Title: '',
    author: '',
    category_Id: '',
    // Add more properties as needed
  };

  constructor(private http: HttpClient, private allBookService : AllBookService) {
    this.selectedBookType = '';
  }

  ngOnInit() {
    // Fetch data from the backend when the component initializes
    this.fetchData();
    this.fetchCategoryData();
  }

  fetchData() {
    // // Make an HTTP GET request to your backend API endpoint
    // this.http.get<any>('https://localhost:7205/api/Books/GetAll')
    //   .subscribe(data => {
    //     this.book = data;
    //     // Assuming the response is an array of books
    //   });
    this.allBookService.getAllBook()
    .subscribe((data) =>{
      this.book = data;
    });
  }

  openEditModal(id: string) {
    // Fetch the book details using the service
    this.allBookService.getBook(id)
      .subscribe((book) => {
        // Set the selected book and open the modal
        this.selectedBook = book;debugger;
      });
  }

  deleteData(id : string){
    this.allBookService.deleteBook(id)
    .subscribe(()=>{
       this.fetchData()
    })
  }

  addNewBook() {
    // Make an HTTP POST request to your backend API endpoint
    this.allBookService.addBook(this.newBook)
      .subscribe(() => {
        // Reset the newBook object and fetch updated data
        this.newBook = {
          book_Id: '',
          book_Title: '',
          author: '',
          category_Id: '',
          // Reset other properties as needed
        };
        this.fetchData();
      });
  }


  updateBook() {
    // Call the service to update the book
    this.allBookService.updateBook(this.selectedBook.book_Id, this.selectedBook)
      .subscribe(() => {
        // Reset the selected book and fetch updated data
        this.selectedBook = {};
        this.fetchData();
      });
  }

  fetchCategoryData() {
    // Make an HTTP GET request to fetch category data
    this.allBookService.getAllCategory()
      .subscribe((data) => {
        // Assuming the response is an array of categories with category_Id and category_name
        // Populate idToNameMapping and bookTypeOptions
        data.forEach((category: any) => {
          this.idToNameMapping[category.category_Id] = category.category_Name;
          this.bookTypeOptions.push({ value: category.category_Id.toString(), label: category.category_Name });
        });
      });
  }

  // idToNameMapping: { [key: number]: string } = {
  //   1: 'Science and Nature',
  //   2: 'Classics',
  //   3: 'History',
  //   4: 'Motivational',
  //   5: 'Cooking',
  //   6: 'Travel',
  //   // Add more mappings as needed
  // };

  // get filteredBook() {
  //   if (!this.searchText) {
  //     return this.book;
  //   }

  //   const searchTerm = this.searchText.toLowerCase();

  //   return this.book.filter((item: any) => {
  //     if (this.searchByCategory) {
  //       return item.category_Id.toString().toLowerCase().includes(searchTerm);
  //     } else {
  //       return item.book_Title.toLowerCase().includes(searchTerm);
  //     }
  //   });
  // }

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
