var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EducationService } from '../services/education.service';
import { ScreenSizeService } from '../services/screen-size.service';
var EducationComponent = (function () {
    function EducationComponent(educationService, screenSizeService) {
        this.educationService = educationService;
        this.screenSizeService = screenSizeService;
    }
    EducationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.educationService.getColleges()
            .then(function (colleges) { return _this.colleges = colleges; });
        this.educationService.getHighSchool()
            .then(function (highSchool) { return _this.highSchool = highSchool; });
    };
    EducationComponent.prototype.stringifyMajors = function (college) {
        return this.educationService.stringifyMajors(college);
    };
    EducationComponent.prototype.isScreenXS = function () {
        return this.screenSizeService.isScreenXS();
    };
    return EducationComponent;
}());
EducationComponent = __decorate([
    Component({
        selector: 'my-education',
        templateUrl: './../templates/education.component.html',
        styleUrls: ['./../styles/education.component.css']
    }),
    __metadata("design:paramtypes", [EducationService,
        ScreenSizeService])
], EducationComponent);
export { EducationComponent };
//# sourceMappingURL=education.component.js.map