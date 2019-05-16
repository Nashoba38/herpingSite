import { RouterModule } from "@angular/router";
import { Component, OnInit, NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

@Component({
  selector: "app-siteHome",
  templateUrl: "./site-home.component.html",
  styleUrls: ["./site-home.component.scss"]
})
export class SiteHomeComponent implements OnInit {
  title = 'Découvrez la diversité de la faune autour du globe !';
  constructor(private zone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let map = am4core.create("chartdiv", am4maps.MapChart);
      let polygonSeries = new am4maps.MapPolygonSeries();
      polygonSeries.useGeodata = true;
      map.series.push(polygonSeries);
      // Configuration de la map (couleurs, noms de pays, ...)
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.fill = am4core.color("rgb(247, 176, 63)");
      polygonSeries.exclude = ["AQ"];

      // Customiser certains pays
      polygonSeries.data = [
        {
          id: "CR",
          name: "Costa Rica",
          fill: am4core.color("#008B8B"),
          url: "http://localhost:4200/marocHome",
          target: "_blank",
          title: "Costa Rica"
        },
        {
          id: "MA",
          name: "Maroc",
          fill: am4core.color("#008B8B"),
          url: "http://localhost:4200/marocHome",
          target: "_blank",
          title: "Maroc"
        },
        {
          id: "FR",
          name: "France",
          fill: am4core.color("#008B8B"),
          url: "http://localhost:4200/marocHome",
          target: "_blank",
          title: "France"
        },
        {
          id: "MG",
          name: "Madagascar",
          fill: am4core.color("#008B8B"),
          url: "http://localhost:4200/marocHome",
          target: "_blank",
          title: "Madagascar"
        }
      ];

      polygonTemplate.propertyFields.fill = "fill";
      polygonTemplate.propertyFields.url = "url";
      polygonTemplate.propertyFields.urlTarget = "target";
      polygonTemplate.propertyFields.tooltipText = "title";

      // Configuration des interactions en hover
      let hs = polygonTemplate.states.create("hover");

      hs.properties.fill = am4core.color("#FF8C00");
      map.geodata = am4geodata_worldLow;
      map.geodataSource.url = "";
      map.projection = new am4maps.projections.Orthographic();
      map.panBehavior = "rotateLongLat";


      map.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color(
        "#aadaff"
      );
      map.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;

      // AJoute un event avec une action à faire au click !

      polygonTemplate.events.on("hit", function(ev) {
        console.log(ev.target);
      });
    });
  }
}
