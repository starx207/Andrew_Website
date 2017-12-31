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
import { Utility } from '../classes/utility';
import { ProjectService } from '../services/project.service';
import { JobService } from '../services/job.service';
import { ScreenSizeService } from '../services/screen-size.service';
var WorkSamplesComponent = (function () {
    function WorkSamplesComponent(projectService, jobService, router, screenSizeService) {
        this.projectService = projectService;
        this.jobService = jobService;
        this.router = router;
        this.screenSizeService = screenSizeService;
    }
    WorkSamplesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadCompanies();
        this.projectService.getProjects()
            .then(function (projects) { return _this.projects = projects; });
        this.buttons = Array.from(document.getElementsByClassName("work-sub-menu"));
        Utility.showElements(this.buttons);
    };
    WorkSamplesComponent.prototype.ngOnDestroy = function () {
        Utility.hideElements(this.buttons);
    };
    WorkSamplesComponent.prototype.navigateTo = function (project) {
        this.router.navigate(['/ProjectDetails', project.id]);
    };
    WorkSamplesComponent.prototype.loadCompanies = function () {
        var _this = this;
        this.companies = [];
        this.jobService.getJobs()
            .then(function (jobs) {
            jobs.forEach(function (job) {
                _this.companies.push(job.compAbbr);
            });
        });
    };
    WorkSamplesComponent.prototype.getCompany = function (companyId) {
        return this.companies[companyId - 1];
    };
    WorkSamplesComponent.prototype.isScreenXS = function () {
        return this.screenSizeService.isScreenXS();
    };
    return WorkSamplesComponent;
}());
WorkSamplesComponent = __decorate([
    Component({
        selector: 'work-samples',
        templateUrl: './../templates/work-samples.component.html',
        styleUrls: ['./../styles/work-samples.component.css']
    }),
    __metadata("design:paramtypes", [ProjectService,
        JobService,
        Router,
        ScreenSizeService])
], WorkSamplesComponent);
export { WorkSamplesComponent };
//# sourceMappingURL=work-samples.component.js.map