import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,
         Params,
         Router }            from '@angular/router';

import { College }           from '../classes/college';
import { EducationService }  from '../services/education.service';

import 'rxjs/add/operator/switchmap';

@Component({
    selector: 'college-details',
    templateUrl: './../templates/college-details.component.html'
})
export class CollegeDetailsComponent implements OnInit {
    college: College;

    constructor(private educationService: EducationService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.educationService.getCollege(+params['id']))
            .subscribe(college => this.college = college);
    }

    goBack(): void {
        this.router.navigate(['/Education'])
    }
}