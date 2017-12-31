import { Injectable, Inject } from '@angular/core';
import { DOCUMENT }           from '@angular/platform-browser';

@Injectable()
export class ScrollService {
    private _topOfPageElement: Element;

    get topOfPageElement(): Element {
        if (!this._topOfPageElement) {
            this._topOfPageElement = this.document.getElementById('top-of-page') || this.document.body;
        }
        return this._topOfPageElement;
    }

    constructor(@Inject(DOCUMENT) private document: any) { }

    scrollToElement(element: Element): void {
        if (element) {
            element.scrollIntoView();

            // If we are very close to the top (<20px), then scroll all the way up.
            // (This can happen if `element` is at the top of the page, but has a small top-margin.)
            if (window.pageYOffset < 20) {
                window.scrollBy(0, -window.pageYOffset);
            }
        }
    }

    scrollToTop(): void {
        this.scrollToElement(this.topOfPageElement);
    }
}