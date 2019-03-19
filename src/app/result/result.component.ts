import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { parse } from 'querystring';

@Component({
  selector: 'app-result',
  templateUrl: 'result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  correctCollection: number;
  inCorrectCollection: number;
  currentTechId: String;
  currentTech: String;
  totalAttempt: number;

  constructor(private globals: Globals) { }

  ngOnInit() {
    this.currentTechId = this.globals.currentTechId;
    this.currentTech = this.globals.currentTech;
    this.totalAttempt = (this.globals.correctCollection) + (this.globals.incorrectCollection);
    this.correctCollection = this.globals.correctCollection;
    this.inCorrectCollection = this.globals.incorrectCollection;
  }
}
