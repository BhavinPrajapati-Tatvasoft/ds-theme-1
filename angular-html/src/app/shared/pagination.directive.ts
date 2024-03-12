import { Directive, Input, OnInit } from '@angular/core';
import { TableComponent } from '../component/table/table.component';

@Directive({
  selector: '[appPagination]',
})
export class PaginationDirective implements OnInit {
  @Input() paginationEnabled: boolean = false;
  constructor(private dataTable: TableComponent) {}
  ngOnInit(): void {
    this.paginationEnabled = this.paginationEnabled || false;
    this.dataTable.displayPagination = this.paginationEnabled;
  }
}
