import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Diagram } from '../diagram';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
@Component({
	selector: 'app-diagram',
	templateUrl: './diagram.component.html',
	styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
	location: Location;
	diagramList: Array<any>;
	diagramNameList: Array<any>;

	pageSettings: Object;
	dataSourceSettings: Object;
	defaultSettings: Object;
	layout: Object;
	nodeTemplate: Function;

	palettes: Array<any>;
	showPaletteItemText: boolean;

	constructor(private http: HttpClient) {

		this.defaultSettings = {
			node: {
				fillColor: "#88C65C", width: 100,
				height: 40, borderColor: "black", borderWidth: 1, labels: [{ name: "label1", fontColor: "black", fontSize: 12, margin: { left: 10, right: 10 } }]
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
						name: 'Parallelogram', width: 70, height: 70, offsetX: 20, offsetY: 30,
						fillColor: 'white', borderWidth: 1.8, shape: 'polygon',
						points: [{ x: 25, y: 1 }, { x: 99, y: 1 }, { x: 75, y: 99 }, { x: 1, y: 99 }]
					},
					{
						name: 'Dimond', width: 70, height: 70, offsetX: 20, offsetY: 20,
						fillColor: 'white', borderWidth: 1.8, shape: 'polygon',
						points: [{ x: 50, y: 1 }, { x: 100, y: 50 }, { x: 50, y: 100 }, { x: 1, y: 50 }]
					}
				]
			},
			{
				'name': 'Swimlane Shapes', 'expanded': true,
				'items': [
					{
						name: 'stackCanvas1', header: { width: 50, height: 50, fillColor: '#C7D4DF', fontSize: 11 }, height: 60, width: 140,
						fillColor: '#f5f5f5', offsetX: 70, offsetY: 30, orientation: 'horizontal', isLane: true
					},
					{
						name: 'stackCanvas2', header: { width: 50, 'height': 50, fillColor: '#C7D4DF', fontSize: 11 }, height: 140, width: 60,
						fillColor: '#f5f5f5', offsetX: 30, offsetY: 70, orientation: 'vertical', isLane: true
					},
					{
						name: 'verticalPhase', type: 'phase', lineWidth: 1, lineDashArray: '3,3',
						lineColor: '#A9A9A9', parent: '', orientation: 'vertical', label: { 'text': '' }
					},
					{
						name: 'horizontalPhase', type: 'phase', lineWidth: 1, lineDashArray: '3,3',
						lineColor: '#A9A9A9', parent: '', orientation: 'horizontal', label: { 'text': '' }
					},
				]
			},
			{
				'name': 'Connectors', 'expanded': true,
				'items': [
					{
						name: 'Orthogonal Link', segments: [{ 'type': 'orthogonal' }], sourcePoint: { x: 0, y: 0 },
						targetPoint: { x: 40, y: 40 },
						targetDecorator: { shape: 'arrow', borderColor: 'black', fillColor: 'black' },
						lineWidth: 1.5, lineColor: 'black'
					},
					{
						name: 'Straight Link', segments: [{ 'type': 'straight' }], sourcePoint: { x: 0, y: 0 },
						targetPoint: { x: 40, y: 40 },
						targetDecorator: { shape: 'arrow', borderColor: 'black', fillColor: 'black' },
						lineWidth: 1.5, lineColor: 'black'
					},
				],
			}
		];

		this.showPaletteItemText = false;
	}

	ngOnInit() {
		this.diagramList = [];
		this.diagramNameList = [];

		this.http.get('http://localhost:3000/api/workflow')
			.subscribe(data => {
				let dataArray = data as Array<any>;

				// get names 
				dataArray.forEach(element => {
					this.diagramList.push(element);
					if(!this.diagramNameList.includes(element["name"])){
						this.diagramNameList.push(element["name"]);
					}
				});				
			})
	}	

	saveDiagram(diagramName: string) {

		let diagram = $("#diagramCore").ejDiagram("instance");
		let json = diagram.save();

		// add diagram name
		let nameKey = "name";
		let nameValue = diagramName;
		json[nameKey] = nameValue;

		// add creation date
		let dateKey = "creationDate";
		let dateValue = Date.now();
		json[dateKey] = dateValue;

		let string = JSON.stringify(json);

		// pass diagram json to server.js
		let dd = new Diagram;
		dd.name = diagramName;
		dd.value = string;
		console.log(dd);

		let result = this.http.post('http://localhost:3000/api/workflow', dd)
			.subscribe(
				(val) => {
					console.log("POST call successful value returned in body",
						val);
				},
				response => {
					console.log("POST call in error", response);
				},
				() => {
					console.log("The POST observable is now completed.");
				});
			
		window.location.reload();
		return result;

	}

	loadDiagram(selectedDiagramName: string) {
		let diagram = $("#diagramCore").ejDiagram("instance");
		let tempList = [];
		let result;

		this.diagramList.forEach(element => {
			if(element["name"] == selectedDiagramName){
				tempList.push(element);	
				result = element;	
			}
		});

		if(tempList.length > 1){
			let recentDate = tempList[0]["creationDate"];
			result = tempList[0];
			tempList.forEach(element => {
				if(element["creationDate"] > recentDate){
					result = element;
				}
			});
		}

		diagram.load(result);
		console.log(diagram);
	}
}
