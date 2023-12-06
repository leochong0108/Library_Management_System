import { Component, OnInit } from '@angular/core';
import { AllBookService } from '../all-book/all-book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalBooks: number = 0;
  categoryTotals: { [key: string]: number } = {};
  categoryNames: { [key: string]: string } = {};

  constructor(private allBookService: AllBookService) {}

  ngOnInit() {
    // Fetch total number of books
    this.allBookService.getAllBook().subscribe((books: any[]) => {
      this.totalBooks = books.length;

      // Fetch category names
      this.allBookService.getAllCategory().subscribe((categories: any[]) => {
        // Create a mapping of category IDs to names
        this.categoryNames = categories.reduce((mapping: { [key: string]: string }, category: any) => {
          mapping[category.category_Id.toString()] = category.category_Name;
          return mapping;
        }, {});

        // Calculate total for each category
        this.categoryTotals = books.reduce((totals: { [key: string]: number }, book: any) => {
          const category = book.category_Id.toString();
          totals[category] = (totals[category] || 0) + 1;
          return totals;
        }, {});
      });
    });
  }

  getCategoryName(categoryId: string): string {
    return this.categoryNames[categoryId] || 'Unknown Category';
  }

  // Add this method to use Object.keys
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
