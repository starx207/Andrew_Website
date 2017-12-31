"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var utility_1 = require("../classes/utility");
var CoursesComponent = (function () {
    function CoursesComponent() {
    }
    CoursesComponent.prototype.ngOnInit = function () {
        this.buttons = Array.from(document.getElementsByClassName("edu-sub-menu"));
        utility_1.Utility.showElements(this.buttons);
    };
    CoursesComponent.prototype.ngOnDestroy = function () {
        utility_1.Utility.hideElements(this.buttons);
    };
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    core_1.Component({
        selector: 'my-courses',
        templateUrl: './../templates/courses.component.html'
    })
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map