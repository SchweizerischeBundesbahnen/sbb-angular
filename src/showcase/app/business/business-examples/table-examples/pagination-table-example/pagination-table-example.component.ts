import { Component, OnInit, ViewChild } from '@angular/core';
import { PageChangeEvent, PaginationComponent } from '@sbb-esta/angular-business/pagination';
import { SbbTableDataSource } from '@sbb-esta/angular-business/table';

import { VehicleExampleItem, VEHICLE_EXAMPLE_DATA } from '../table-example-data';

@Component({
  selector: 'sbb-pagination-table-example',
  templateUrl: './pagination-table-example.component.html'
})
export class PaginationTableExampleComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'power', 'description'];

  dataSource: SbbTableDataSource<VehicleExampleItem> = new SbbTableDataSource(VEHICLE_EXAMPLE_DATA);
  @ViewChild('pagination', { static: true }) paginator: PaginationComponent;

  pageSize: number = 5;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.paginator.pageChange.subscribe((pageChangeEvent: PageChangeEvent) =>
      console.log(pageChangeEvent)
    );
  }

  rowCount(rowCount: number) {
    this.dataSource = new SbbTableDataSource<VehicleExampleItem>(
      VEHICLE_EXAMPLE_DATA.slice(0, rowCount)
    );
    this.dataSource.paginator = this.paginator;
  }
}
