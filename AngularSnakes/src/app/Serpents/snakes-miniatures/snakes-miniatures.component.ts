import { SnakesService } from '../snakes.service';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-miniatures',
  templateUrl: './snakes-miniatures.component.html',
  styleUrls: ['./snakes-miniatures.component.scss']
})
export class SnakesMiniaturesComponent implements OnInit {
  snakes = [];

  constructor(
    private snakesService: SnakesService
  ) {}

  ngOnInit() {

    this.getSnakes();
  }

  getSnakes(): void {
    this.snakesService.getSnakes().subscribe(data => ((this.snakes = data)));
  }

}
