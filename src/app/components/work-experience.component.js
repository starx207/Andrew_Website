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
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';
import { ScreenSizeService } from '../services/screen-size.service';
import { Utility } from '../classes/utility';
var WorkExperienceComponent = (function () {
    function WorkExperienceComponent(jobService, router, screenSizeService) {
        this.jobService = jobService;
        this.router = router;
        this.screenSizeService = screenSizeService;
    }
    WorkExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobService.getJobs()
            .then(function (jobs) { return _this.jobs = jobs; });
        this.buttons = Array.from(document.getElementsByClassName("work-sub-menu"));
        Utility.showElements(this.buttons);
    };
    WorkExperienceComponent.prototype.ngOnDestroy = function () {
        Utility.hideElements(this.buttons);
    };
    WorkExperienceComponent.prototype.navigateTo = function (job) {
        this.router.navigate(['/JobDetails', job.id]);
    };
    WorkExperienceComponent.prototype.isScreenXS = function () {
        return this.screenSizeService.isScreenXS();
    };
    return WorkExperienceComponent;
}());
WorkExperienceComponent = __decorate([
    Component({
        selector: 'my-experience',
        templateUrl: './../templates/work-experience.component.html',
        styleUrls: ['./../styles/work-experience.component.css']
    }),
    __metadata("design:paramtypes", [JobService,
        Router,
        ScreenSizeService])
], WorkExperienceComponent);
export { WorkExperienceComponent };
//# sourceMappingURL=work-experience.component.js.map