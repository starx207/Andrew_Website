import { Component }         from '@angular/core';
import { NgClass }           from '@angular/common';
import { ScreenSizeService } from '../services/screen-size.service';

@Component({
    selector: 'about-me',
    templateUrl: './../templates/about-me.component.html',
    styleUrls: ['./../styles/about-me.component.css']
})
export class AboutMeComponent {
    constructor(private screenSizeService: ScreenSizeService) { }

    isScreenXS(): boolean {
        return this.screenSizeService.isScreenXS();
    }
 }