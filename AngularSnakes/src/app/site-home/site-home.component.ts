import { Component, NgZone, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

@Component({
  selector: "app-siteHome",
  templateUrl: "./site-home.component.html",
  styleUrls: ["./site-home.component.scss"]
})
export class SiteHomeComponent implements OnInit {
  title = "Découvrez la diversité de la faune autour du globe !";
  constructor(private zone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4maps.MapChart);
      chart.geodata = am4geodata_worldLow;
      chart.projection = new am4maps.projections.Orthographic();

      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonSeries.useGeodata = true;

      // Configuration de la map (couleurs, noms de pays, ...)
      polygonTemplate.fill = am4core.color("rgb(247, 176, 63)");
      polygonSeries.exclude = ["AQ"];

      // Customiser certains pays
      polygonSeries.data = [
        {
          id: "CR",
          name: "Costa Rica",
          fill: am4core.color("#008B8B"),
          url: "http://localhost:4200/marocHome",
          title: "Costa Rica"
        },
        {
          id: "MA",
          name: "Maroc",
          fill: am4core.color("#008B8B"),
          url: "http://localhost:4200/marocHome",
          title: "Maroc"
        },
        {
          id: "FR",
          name: "France",
          fill: am4core.color("#008B8B"),
          url: "http://localhost:4200/marocHome",
          title: "France"
        },
        {
          id: "MG",
          name: "Madagascar",
          fill: am4core.color("#008B8B"),
          url: "http://localhost:4200/marocHome",
          title: "Madagascar"
        }
      ];

      polygonTemplate.propertyFields.fill = "fill";
      polygonTemplate.propertyFields.url = "url";
      // polygonTemplate.propertyFields.urlTarget = "target";
      polygonTemplate.propertyFields.tooltipText = "title";

      // Configuration des interactions en hover
      let hs = polygonTemplate.states.create("hover");

      hs.properties.fill = am4core.color("#FF8C00");
      chart.geodataSource.url = "";
      chart.panBehavior = "rotateLongLat";
      chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color(
        "#aadaff"
      );
      chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;

      // AJoute un event avec une action à faire au click !

      polygonTemplate.events.on("hit", function(ev) {
        console.log(ev.target);
      });
    });
  }
}
