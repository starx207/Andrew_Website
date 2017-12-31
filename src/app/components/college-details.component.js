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
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from '../services/education.service';
import 'rxjs/add/operator/switchmap';
var CollegeDetailsComponent = (function () {
    function CollegeDetailsComponent(educationService, route, router) {
        this.educationService = educationService;
        this.route = route;
        this.router = router;
    }
    CollegeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.educationService.getCollege(+params['id']); })
            .subscribe(function (college) { return _this.college = college; });
    };
    CollegeDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['/Education']);
    };
    return CollegeDetailsComponent;
}());
CollegeDetailsComponent = __decorate([
    Component({
        selector: 'college-details',
        templateUrl: './../templates/college-details.component.html'
    }),
    __metadata("design:paramtypes", [EducationService,
        ActivatedRoute,
        Router])
], CollegeDetailsComponent);
export { CollegeDetailsComponent };
//# sourceMappingURL=college-details.component.js.map