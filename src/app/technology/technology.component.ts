import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TechnologyService } from './technology.service';

@Component({
    selector: 'app-technology',
    templateUrl: 'technology.component.html',
    styleUrls: ['technology.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class TechnologyComponent implements OnInit {
    technologies = [];
    dataNotAvailable: Boolean = false;
    loading: Boolean = false;

    constructor(private techService: TechnologyService) { }

    ngOnInit() {
        this.dataNotAvailable = true;
        this.loading = true;
        this.techService.getTechnologies()
            .subscribe(res => {
                this.technologies = res.project;
                this.dataNotAvailable = false;
                this.loading = false;
            }, error => {
                this.dataNotAvailable = true;
                this.loading = false;
            })
    }
}
