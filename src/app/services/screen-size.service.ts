import { Injectable, Inject } from '@angular/core';
import { DOCUMENT }           from '@angular/platform-browser';

@Injectable()
export class ScreenSizeService {
    private _screenSizeIndicator: HTMLElement;

    get screenSizeIndicator(): HTMLElement {
        if (!this._screenSizeIndicator) {
            this._screenSizeIndicator = this.document.getElementById('size-indicator');
        }
        return this._screenSizeIndicator;
    }

    constructor(@Inject(DOCUMENT) private document: any) { }

    getScreenSize(): string {
        var size: string = "";
        var color: string = window.getComputedStyle(this.screenSizeIndicator, null)["color"];

        if (color === "rgb(255, 255, 255)") {
            size = "xs";
        } else if (color === "rgb(255, 0, 0)") {
            size = "sm";
        } else if (color === "rgb(0, 128, 0)") {
            size = "md";
        } else {
            size = "lg";
        }
        return size;
    }

    getColor(): string {
        return window.getComputedStyle(this.screenSizeIndicator, null)["color"];
    }

    isScreenXS(): boolean {
        return this.getScreenSize() === "xs";
    }

    isScreenSM(): boolean {
        return this.getScreenSize() === "sm";
    }

    isScreenMD(): boolean {
        return this.getScreenSize() === "md";
    }

    isScreenLG(): boolean {
        return this.getScreenSize() === "lg";
    }
}