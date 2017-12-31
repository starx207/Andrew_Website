var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { COLLEGES, HIGHSCHOOL } from '../data-collections/education';
var EducationService = (function () {
    function EducationService() {
    }
    EducationService.prototype.getColleges = function () {
        return Promise.resolve(COLLEGES);
    };
    EducationService.prototype.getCollege = function (id) {
        return this.getColleges()
            .then(function (colleges) { return colleges.find(function (college) { return college.id === id; }); });
    };
    EducationService.prototype.getHighSchool = function () {
        return Promise.resolve(HIGHSCHOOL);
    };
    EducationService.prototype.stringifyMajors = function (college) {
        var allMajors = "";
        college.majors.forEach(function (major) {
            allMajors = allMajors + major + ", ";
        });
        return allMajors.slice(0, allMajors.length - 2);
    };
    return EducationService;
}());
EducationService = __decorate([
    Injectable()
], EducationService);
export { EducationService };
//# sourceMappingURL=education.service.js.map