import { Component, 
         OnInit,
         OnDestroy }     from '@angular/core';
import { ActivatedRoute, 
         Params }        from '@angular/router';

import { Job }           from '../classes/job';
import { JobService }    from '../services/job.service';
import { Utility }       from '../classes/utility';

import 'rxjs/add/operator/switchmap';

@Component({
    selector: 'job-details',
    templateUrl: './../templates/job-details.component.html',
    styleUrls: ['./../styles/job-details.component.css']
})
export class JobDetailsComponent implements OnInit, OnDestroy { 
    job: Job;
    buttons: Element[];

    constructor(private jobService: JobService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.jobService.getJob(+params['id']))
            .subscribe(job => this.job = job);

        this.buttons = Array.from(document.getElementsByClassName("work-sub-menu"));
        Utility.showElements(this.buttons);
    }

    ngOnDestroy(): void {
        Utility.hideElements(this.buttons);
    }
}