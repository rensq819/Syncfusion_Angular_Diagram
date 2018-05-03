import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

  dataSourceSettings: Object;
  defaultSettings:Object;
  layout: Object;
  nodeTemplate: Function;
  constructor() {
      let data = [
        { Name: "Elizabeth", Role: "Director" },
        { Name: "Christina", ReportingPerson: "Elizabeth", Role: "Manager" },
        { Name: "Yoshi", ReportingPerson: "Christina", Role: "Lead" },
        { Name: "Philip", ReportingPerson: "Christina", Role: "Lead" },
        { Name: "Yang", ReportingPerson: "Elizabeth", Role: "Manager" },
        { Name: "Roland", ReportingPerson: "Yang", Role: "Lead" },
        { Name: "Yvonne", ReportingPerson: "Yang", Role: "Lead" }
        ];
      //To represent the roles
      let codes = {
          Director: "rgb(0, 139,139)",
          Manager: "rgb(30, 30,113)",
          Lead: "rgb(0, 100,0)"
      }
      this.dataSourceSettings ={ id: "Name",parent: "ReportingPerson",dataSource: data};
      this.layout = { type: "organizationalchart", orientation: "toptobottom", horizontalSpacing: 25, verticalSpacing: 35, marginX: 3, marginY: 3};
      // Bind custom data with node
      this.nodeTemplate = function (diagram, node) {
              node.labels[0].text = node.Name;
            node.fillColor = codes[node.Role];
              };
      this.defaultSettings = {
          node: {
              fillColor: "#88C65C", width: 100,
              height: 40, borderColor: "black", borderWidth: 1, labels: [{ name: "label1", fontColor: "white", fontSize: 12, margin: { left: 10, right: 10 } }]
          },
          connector: {
              lineColor: "#000000", segments: [{ type: "orthogonal" }], targetDecorator: { shape: "none" }
              }
      };
  }


  ngOnInit() {
  }

}
