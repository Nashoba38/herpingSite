import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { LezardsService } from "../lezards.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lezardDetail",
  templateUrl: "./lezard-detail.component.html",
  styleUrls: ["./lezard-detail.component.scss"]
})
export class LezardDetailComponent implements OnInit {
  lezard = null;

  constructor(
    private lezardsService: LezardsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLezard();
  }

  getLezard(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.lezardsService.getLezard(id).subscribe(lezard => (this.lezard = lezard));
  }

}
