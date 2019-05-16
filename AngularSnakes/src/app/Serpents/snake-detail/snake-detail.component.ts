import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { SnakesService } from "../snakes.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail",
  templateUrl: "./snake-detail.component.html",
  styleUrls: ["./snake-detail.component.scss"]
})
export class SnakeDetailComponent implements OnInit {
  snake = null;

  constructor(
    private snakesService: SnakesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSnake();
  }

  getSnake(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.snakesService.getSnake(id).subscribe(snake => (this.snake = snake));
  }

}
