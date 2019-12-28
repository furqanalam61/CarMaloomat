import { Component, OnInit } from '@angular/core';
import { DatalistingService } from '../datalisting.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  constructor(private datalistingService: DatalistingService) {}
  loading = false;
  cars = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.loading = true;

    console.log('get');
      this.datalistingService.getCars().subscribe(
      data => {
        this.loading = false;
        this.cars = data;
        console.log('data', data);
      },
      error => {
        this.loading = false;

        console.log('error', error);
      }
    );
  }
}
