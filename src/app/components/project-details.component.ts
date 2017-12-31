import { Component, 
         OnInit,
         OnDestroy }         from '@angular/core';
import { ActivatedRoute, 
         Params }            from '@angular/router';

import { Project }           from '../classes/project';
import { ProjectService }    from '../services/project.service';
import { Utility }           from '../classes/utility';

import 'rxjs/add/operator/switchmap';

@Component({
    selector: 'project-details',
    templateUrl: './../templates/project-details.component.html',
    styleUrls: ['./../styles/project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy { 
    project: Project;
    buttons: Element[];

    constructor(private projectService: ProjectService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.projectService.getProject(+params['id']))
            .subscribe(project => this.project = project);

        this.buttons = Array.from(document.getElementsByClassName("work-sub-menu"));
        Utility.showElements(this.buttons);
    }

    ngOnDestroy(): void {
        Utility.hideElements(this.buttons);
    }
}