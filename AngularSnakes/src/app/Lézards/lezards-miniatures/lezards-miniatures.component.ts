import { LezardsService } from '../lezards.service';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-lezardMiniatures',
  templateUrl: '../lezards-miniatures/lezards-miniatures.component.html',
  styleUrls: ['../lezards-miniatures/lezards-miniatures.component.scss']
})
export class LezardMiniaturesComponent implements OnInit {
  lezards = [];

  constructor(
    private lezardsService: LezardsService
  ) {}

  ngOnInit() {

    this.getLezard();
  }

  getLezard(): void {
    this.lezardsService.getLezards().subscribe(data => ((this.lezards = data)));
  }

}
