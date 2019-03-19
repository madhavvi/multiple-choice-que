import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TechnologyService } from '../technology/technology.service';
import { Globals } from '../globals';
import * as _ from 'underscore';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})

export class QuestionComponent implements OnInit {

    questionCollection = [];
    correctAnsCollection = [];
    routeVal: any;
    currentTech: string;

    constructor(private tService: TechnologyService,
        private route: ActivatedRoute,
        private globals: Globals,
        private router: Router) {
            route.params.subscribe(route => {
                this.routeVal = route;
            })
    }

    ngOnInit() {

        this.tService.getTechnologies()
            .subscribe(res => {
                let me = this;
                let questionCollection = [];
                res.project.forEach(function (val) {                    
                    if (val.id === me.routeVal.tech) {
                        me.globals.currentTechId = val.id;
                        me.globals.currentTech = val.name;
                        me.currentTech = val.name;
                        questionCollection = val.questions;
                    }
                });
                this.questionCollection = questionCollection;
            })
    }

    finish() {
        let correctAnsCount = 0;
        let incorrectAnsCount = 0;
        _.map(this.questionCollection, function (obj) {
            if (obj.hasOwnProperty('answer')) {
                if (obj.correctAnswerId == obj.answer) {
                    correctAnsCount++;
                } else {
                    incorrectAnsCount++;
                }
            }
        });
        this.globals.correctCollection = correctAnsCount;
        this.globals.incorrectCollection = incorrectAnsCount;
        this.router.navigate(['result']);
    }

}