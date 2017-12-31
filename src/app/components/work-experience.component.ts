import { Component, 
         OnInit,
         OnDestroy }         from '@angular/core';
import { Router }            from '@angular/router';
import { NgClass }           from '@angular/common';

import { Job }               from '../classes/job';
import { JobService }        from '../services/job.service';
import { ScreenSizeService } from '../services/screen-size.service';
import { Utility }           from '../classes/utility';

@Component({
    selector: 'my-experience',
    templateUrl: './../templates/work-experience.component.html',
    styleUrls: ['./../styles/work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit, OnDestroy {
    jobs: Job[];
    buttons: Element[];

    constructor(private jobService: JobService,
                private router: Router,
                private screenSizeService: ScreenSizeService) { }

    ngOnInit(): void {
        this.jobService.getJobs()
            .then(jobs => this.jobs = jobs);
        this.buttons = Array.from(document.getElementsByClassName("work-sub-menu"));
        Utility.showElements(this.buttons);
    }

    ngOnDestroy(): void {
        Utility.hideElements(this.buttons);
    }

    navigateTo(job: Job): void {
        this.router.navigate(['/JobDetails', job.id]);
    }

    isScreenXS(): boolean {
        return this.screenSizeService.isScreenXS();
    }
}