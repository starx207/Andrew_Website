var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
var ScrollService = (function () {
    function ScrollService(document) {
        this.document = document;
    }
    Object.defineProperty(ScrollService.prototype, "topOfPageElement", {
        get: function () {
            if (!this._topOfPageElement) {
                this._topOfPageElement = this.document.getElementById('top-of-page') || this.document.body;
            }
            return this._topOfPageElement;
        },
        enumerable: true,
        configurable: true
    });
    ScrollService.prototype.scrollToElement = function (element) {
        if (element) {
            element.scrollIntoView();
            // If we are very close to the top (<20px), then scroll all the way up.
            // (This can happen if `element` is at the top of the page, but has a small top-margin.)
            if (window.pageYOffset < 20) {
                window.scrollBy(0, -window.pageYOffset);
            }
        }
    };
    ScrollService.prototype.scrollToTop = function () {
        this.scrollToElement(this.topOfPageElement);
    };
    return ScrollService;
}());
ScrollService = __decorate([
    Injectable(),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], ScrollService);
export { ScrollService };
//# sourceMappingURL=scroll.service.js.map