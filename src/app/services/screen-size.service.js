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
var ScreenSizeService = (function () {
    function ScreenSizeService(document) {
        this.document = document;
    }
    Object.defineProperty(ScreenSizeService.prototype, "screenSizeIndicator", {
        get: function () {
            if (!this._screenSizeIndicator) {
                this._screenSizeIndicator = this.document.getElementById('size-indicator');
            }
            return this._screenSizeIndicator;
        },
        enumerable: true,
        configurable: true
    });
    ScreenSizeService.prototype.getScreenSize = function () {
        var size = "";
        var color = window.getComputedStyle(this.screenSizeIndicator, null)["color"];
        if (color === "rgb(255, 255, 255)") {
            size = "xs";
        }
        else if (color === "rgb(255, 0, 0)") {
            size = "sm";
        }
        else if (color === "rgb(0, 128, 0)") {
            size = "md";
        }
        else {
            size = "lg";
        }
        return size;
    };
    ScreenSizeService.prototype.getColor = function () {
        return window.getComputedStyle(this.screenSizeIndicator, null)["color"];
    };
    ScreenSizeService.prototype.isScreenXS = function () {
        return this.getScreenSize() === "xs";
    };
    ScreenSizeService.prototype.isScreenSM = function () {
        return this.getScreenSize() === "sm";
    };
    ScreenSizeService.prototype.isScreenMD = function () {
        return this.getScreenSize() === "md";
    };
    ScreenSizeService.prototype.isScreenLG = function () {
        return this.getScreenSize() === "lg";
    };
    return ScreenSizeService;
}());
ScreenSizeService = __decorate([
    Injectable(),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], ScreenSizeService);
export { ScreenSizeService };
//# sourceMappingURL=screen-size.service.js.map