import { Component, 
         OnInit }            from '@angular/core';
import { NgClass }           from '@angular/common';

import { EducationService }  from '../services/education.service';
import { ScreenSizeService } from '../services/screen-size.service';
import { College }           from '../classes/college';
import { HighSchool }        from '../classes/highschool';

@Component({
    selector: 'my-education',
    templateUrl: './../templates/education.component.html',
    styleUrls: ['./../styles/education.component.css']
})
export class EducationComponent implements OnInit {
    colleges: College[];
    highSchool: HighSchool;

    constructor(private educationService: EducationService,
                private screenSizeService: ScreenSizeService) { }

    ngOnInit(): void {
        this.educationService.getColleges()
            .then(colleges => this.colleges = colleges);

        this.educationService.getHighSchool()
            .then(highSchool => this.highSchool = highSchool);
    }

    stringifyMajors(college: College): string {
        return this.educationService.stringifyMajors(college);
    }

    isScreenXS(): boolean {
        return this.screenSizeService.isScreenXS();
    }
}