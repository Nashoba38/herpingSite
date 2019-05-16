import { Component, OnInit} from "@angular/core";
import { SnakesService } from "../snakes.service";

@Component({
  selector: "app-snakes",
  templateUrl: "./snakes.component.html",
  styleUrls: ["./snakes.component.scss"]
})
export class SnakesComponent implements OnInit {
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
