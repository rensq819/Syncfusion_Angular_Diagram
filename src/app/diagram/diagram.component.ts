import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

  pageSettings: Object;
  dataSourceSettings: Object;
  defaultSettings:Object;
  layout: Object;
  nodeTemplate: Function;

  palettes: Array<any>;
  showPaletteItemText: boolean;

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
      this.pageSettings = {
        pageWidth: 2000,
        pageHeight: 2000,
      };
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

      this.palettes = [
        {
            'name': 'Basic Shapes', 'expanded': true,
            'items': [
                {
                    name: 'Rectangle', height: 45, width: 70, offsetX: 70 / 2, offsetY: 45 / 2,
                    fillColor: 'white', borderWidth: 1.5, type: 'basic', shape: 'rectangle'
                },
                {
                    name: 'Ellipse', width: 70, height: 70, offsetX: 20, offsetY: 20, fillColor: 'white',
                    borderWidth: 1.5, type: 'basic', shape: 'ellipse'
                },
                {
                    'name': 'Parallelogram', 'width': 70, 'height': 70, 'offsetX': 20, 'offsetY': 30,
                    'fillColor': 'white', 'borderWidth': 1.8, 'shape': 'polygon',
                    'points': [{ x: 25, y: 1 }, { x: 99, y: 1 }, { x: 75, y: 99 }, { x: 1, y: 99 }]
                },
                {
                    'name': 'Dimond', 'width': 70, 'height': 70, 'offsetX': 20, 'offsetY': 20,
                    'fillColor': 'white', 'borderWidth': 1.8, 'shape': 'polygon',
                    'points': [{ x: 50, y: 1 }, { x: 100, y: 50 }, { x: 50, y: 100 }, { x: 1, y: 50 }]
                }
            ]
        },
        {
            'name': 'BPMN Shapes', 'expanded': true,
            'items': [
                {
                    name: 'Start Node', height: 70, width: 70, offsetX: 70 / 2, offsetY: 45 / 2,
                    fillColor: 'white', borderWidth: 1.5, type: ej.datavisualization.Diagram.Shapes.BPMN, shape: ej.datavisualization.Diagram.BPMNShapes.Event,
                    event: ej.datavisualization.Diagram.BPMNEvents.Start, trigger: ej.datavisualization.Diagram.BPMNTriggers.None
                },
                {
                    name: 'End Node', height: 70, width: 70, offsetX: 70 / 2, offsetY: 45 / 2,
                    fillColor: 'white', borderWidth: 2, type: ej.datavisualization.Diagram.Shapes.BPMN, shape: ej.datavisualization.Diagram.BPMNShapes.Event,
                    event: ej.datavisualization.Diagram.BPMNEvents.End, trigger: ej.datavisualization.Diagram.BPMNTriggers.None
                },
                {
                    name: 'None Gateway', width: 70, height: 70, offsetX: 20, offsetY: 20, fillColor: 'white',
                    borderWidth: 1.5, type: ej.datavisualization.Diagram.Shapes.BPMN, shape: ej.datavisualization.Diagram.BPMNShapes.Gateway,
                    gateway: ej.datavisualization.Diagram.BPMNGateways.None
                },
                {
                    name: 'Exclusive Gateway', width: 70, height: 70, offsetX: 20, offsetY: 20, fillColor: 'white',
                    borderWidth: 1.5, type: ej.datavisualization.Diagram.Shapes.BPMN, shape: ej.datavisualization.Diagram.BPMNShapes.Gateway,
                    gateway: ej.datavisualization.Diagram.BPMNGateways.Exclusive
                },
                {
                    name: 'Parallel Gateway', width: 70, height: 70, offsetX: 20, offsetY: 20, fillColor: 'white',
                    borderWidth: 1.5, type: ej.datavisualization.Diagram.Shapes.BPMN, shape: ej.datavisualization.Diagram.BPMNShapes.Gateway,
                    gateway: ej.datavisualization.Diagram.BPMNGateways.Parallel
                },
                {
                    name: 'Inclusive Gateway', width: 70, height: 70, offsetX: 20, offsetY: 20, fillColor: 'white',
                    borderWidth: 1.5, type: ej.datavisualization.Diagram.Shapes.BPMN, shape: ej.datavisualization.Diagram.BPMNShapes.Gateway,
                    gateway: ej.datavisualization.Diagram.BPMNGateways.Inclusive
                },
                {
                    name: 'Activity', width: 100, height: 100, offsetX: 100, offsetY: 100, fillColor: 'white',
                    borderWidth: 1.5, type: ej.datavisualization.Diagram.Shapes.BPMN, shape: ej.datavisualization.Diagram.BPMNShapes.Activity,
                    activity: ej.datavisualization.Diagram.BPMNActivity.Task
                },
                {
                    name: 'DataSource', width: 100, height: 100, offsetX: 100, offsetY: 100, fillColor: 'white',
                    borderWidth: 1.5, type: ej.datavisualization.Diagram.Shapes.BPMN, shape: ej.datavisualization.Diagram.BPMNShapes.DataSource
                }
            ]
        },
        {
            'name': 'Swimlane Shapes', 'expanded': true,
            'items': [
                {
                    'name': 'stackCanvas1', 'header': { 'width': 50, 'height': 50, 'fillColor': '#C7D4DF', 'fontSize': 11 }, 'height': 60, 'width': 140,
                    'fillColor': '#f5f5f5', 'offsetX': 70, 'offsetY': 30, 'orientation': 'horizontal', 'isLane': true
                },
                {
                    'name': 'stackCanvas2', 'header': { 'width': 50, 'height': 50, 'fillColor': '#C7D4DF', 'fontSize': 11 }, 'height': 140, 'width': 60,
                    'fillColor': '#f5f5f5', 'offsetX': 30, 'offsetY': 70, 'orientation': 'vertical', 'isLane': true
                },
                {
                    'name': 'verticalPhase', 'type': 'phase', 'lineWidth': 1, 'lineDashArray': '3,3',
                    'lineColor': '#A9A9A9', 'parent': '', 'orientation': 'vertical', 'label': { 'text': '' }
                },
                {
                    'name': 'horizontalPhase', 'type': 'phase', 'lineWidth': 1, 'lineDashArray': '3,3',
                    'lineColor': '#A9A9A9', 'parent': '', 'orientation': 'horizontal', 'label': { 'text': '' }
                },
            ]
        },
        {
            'name': 'Connectors', 'expanded': true,
            'items': [
                {
                    'name': 'Orthogonal Link', 'segments': [{ 'type': 'orthogonal' }], 'sourcePoint': { x: 0, y: 0 },
                    'targetPoint': { x: 40, y: 40 },
                    'targetDecorator': { 'shape': 'arrow', 'borderColor': 'black', 'fillColor': 'black' },
                    'lineWidth': 1.5, 'lineColor': 'black'
                },
                {
                    'name': 'Straight Link', 'segments': [{ 'type': 'straight' }], 'sourcePoint': { x: 0, y: 0 },
                    'targetPoint': { x: 40, y: 40 },
                    'targetDecorator': { 'shape': 'arrow', 'borderColor': 'black', 'fillColor': 'black' },
                    'lineWidth': 1.5, 'lineColor': 'black'
                },
            ],
        }
    ];
    
    this.showPaletteItemText = false;
  }

  
  ngOnInit() {
  }

}
