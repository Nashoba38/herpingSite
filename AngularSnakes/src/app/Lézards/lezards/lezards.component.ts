import { Component, OnInit} from "@angular/core";
import { LezardsService } from "../lezards.service";

@Component({
  selector: "app-lezards",
  templateUrl: "./lezards.component.html",
  styleUrls: ["./lezards.component.scss"]
})
export class LezardsComponent implements OnInit {
  lezards = [];

  constructor(
    private lezardsService: LezardsService
  ) {}

  ngOnInit() {

    this.getLezards();
  }

  getLezards(): void {
    this.lezardsService.getLezards().subscribe(data => ((this.lezards = data)));
  }


}
