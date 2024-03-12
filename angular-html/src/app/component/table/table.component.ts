import { Component, Injectable, Input, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorSelectConfig,
} from '@angular/material/paginator';
import { MAT_SELECT_CONFIG } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

export interface UserData {
  imgPath: string;
  FullName: string;
  PhoneNumber: string;
  EmailAddress: string;
  Revenue: string;
  Rating: any;
  Status: string;
}

const table_data: UserData[] = [
  {
    imgPath: './assets/images/table-user-1.png',
    FullName: 'Wade Warren',
    PhoneNumber: '(308) 555-0121',
    EmailAddress: 'bill.sanders@example.com',
    Revenue: '$13,240.3',
    Rating: 1,
    Status: 'Pending',
  },
  {
    imgPath: './assets/images/table-user-2.png',
    FullName: 'Esther Howard',
    PhoneNumber: '(405) 555-0128',
    EmailAddress: 'sara.cruz@example.com',
    Revenue: '$13,240.3',
    Rating: 5,
    Status: 'Completed',
  },
  {
    imgPath: './assets/images/table-user-3.png',
    FullName: 'Jane Cooper',
    PhoneNumber: '(405) 555-0128',
    EmailAddress: 'sara.cruz@example.com',
    Revenue: '$13,240.3',
    Rating: 4,
    Status: 'Rejected',
  },
  {
    imgPath: './assets/images/table-user-4.png',
    FullName: 'Annette Black',
    PhoneNumber: '(209) 555-0104',
    EmailAddress: 'bill.sanders@example.com',
    Revenue: '$13,240.3',
    Rating: 2,
    Status: 'Pending',
  },
  {
    imgPath: './assets/images/table-user-1.png',
    FullName: 'Wade Warren',
    PhoneNumber: '(308) 555-0121',
    EmailAddress: 'bill.sanders@example.com',
    Revenue: '$13,240.3',
    Rating: 1,
    Status: 'Pending',
  },
  {
    imgPath: './assets/images/table-user-2.png',
    FullName: 'Esther Howard',
    PhoneNumber: '(405) 555-0128',
    EmailAddress: 'sara.cruz@example.com',
    Revenue: '$13,240.3',
    Rating: 5,
    Status: 'Completed',
  },
  {
    imgPath: './assets/images/table-user-3.png',
    FullName: 'Jane Cooper',
    PhoneNumber: '(405) 555-0128',
    EmailAddress: 'sara.cruz@example.com',
    Revenue: '$13,240.3',
    Rating: 4,
    Status: 'Rejected',
  },
  {
    imgPath: './assets/images/table-user-4.png',
    FullName: 'Annette Black',
    PhoneNumber: '(209) 555-0104',
    EmailAddress: 'bill.sanders@example.com',
    Revenue: '$13,240.3',
    Rating: 2,
    Status: 'Pending',
  },
];

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `First page`;
  itemsPerPageLabel = `Rows per page: `;
  lastPageLabel = `Last page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `1 - 10 of 100`;
    }
    return `${page + 1} - ${pageSize} of ${length}`;
  }
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl },
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayClass: 'customClass' },
    },
  ],
})
export class TableComponent {
  @Input() paginationEnabled: boolean = false;
  @Input() tableClass: string;
  displayPagination!: boolean;
  displayedColumns: string[] = [
    'FullName',
    'PhoneNumber',
    'EmailAddress',
    'Revenue',
    'Rating',
    'Status',
    'Action',
  ];
  dataSource: MatTableDataSource<UserData>;
  paginationSelectConfig: MatPaginatorSelectConfig = {
    panelClass: 'pagination-menu',
  };
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null =
    null;
  @ViewChild(MatSort) sort: MatSort | null = null;
  constructor() {
    this.tableClass = '';
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(table_data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
