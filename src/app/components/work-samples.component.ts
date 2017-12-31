import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }                       from '@angular/router';
import { NgClass }                      from '@angular/common';

import { Utility }                      from '../classes/utility';
import { Project }                      from '../classes/project';
import { ProjectService }               from '../services/project.service';
import { JobService }                   from '../services/job.service';
import { ScreenSizeService }            from '../services/screen-size.service';
import { Job }                          from '../classes/job';

@Component({
    selector: 'work-samples',
    templateUrl: './../templates/work-samples.component.html',
    styleUrls: ['./../styles/work-samples.component.css']
})
export class WorkSamplesComponent implements OnInit, OnDestroy {
    projects: Project[];
    buttons: Element[];
    companies: string[];

    constructor(private projectService: ProjectService,
                private jobService: JobService,
                private router: Router,
                private screenSizeService: ScreenSizeService) { }

    ngOnInit(): void {
        this.loadCompanies();        

        this.projectService.getProjects()
            .then(projects => this.projects = projects);

        this.buttons = Array.from(document.getElementsByClassName("work-sub-menu"));
        Utility.showElements(this.buttons);
    }

    ngOnDestroy(): void {
        Utility.hideElements(this.buttons);
    }

    navigateTo(project: Project): void {
        this.router.navigate(['/ProjectDetails', project.id]);
    }

    loadCompanies(): void {
        this.companies = [];
        this.jobService.getJobs()
            .then(jobs => {
                jobs.forEach(job => {
                    this.companies.push(job.compAbbr);
                })
            });
    }

    getCompany(companyId: number): string {
        return this.companies[companyId - 1];
    }

    isScreenXS(): boolean {
        return this.screenSizeService.isScreenXS();
    }
 }