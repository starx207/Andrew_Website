import { Component, OnInit, OnDestroy } from '@angular/core';
import { Utility }                      from '../classes/utility';

@Component({
    selector: 'my-courses',
    templateUrl: './../templates/courses.component.html'
})
export class CoursesComponent implements OnInit, OnDestroy {
    buttons: Element[];

    ngOnInit(): void {
        this.buttons = Array.from(document.getElementsByClassName("edu-sub-menu"));
        Utility.showElements(this.buttons);
    }

    ngOnDestroy(): void {
        Utility.hideElements(this.buttons);
    }
 }