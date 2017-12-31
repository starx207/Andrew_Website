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
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';
import { Utility } from '../classes/utility';
import 'rxjs/add/operator/switchmap';
var JobDetailsComponent = (function () {
    function JobDetailsComponent(jobService, route) {
        this.jobService = jobService;
        this.route = route;
    }
    JobDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.jobService.getJob(+params['id']); })
            .subscribe(function (job) { return _this.job = job; });
        this.buttons = Array.from(document.getElementsByClassName("work-sub-menu"));
        Utility.showElements(this.buttons);
    };
    JobDetailsComponent.prototype.ngOnDestroy = function () {
        Utility.hideElements(this.buttons);
    };
    return JobDetailsComponent;
}());
JobDetailsComponent = __decorate([
    Component({
        selector: 'job-details',
        templateUrl: './../templates/job-details.component.html',
        styleUrls: ['./../styles/job-details.component.css']
    }),
    __metadata("design:paramtypes", [JobService,
        ActivatedRoute])
], JobDetailsComponent);
export { JobDetailsComponent };
//# sourceMappingURL=job-details.component.js.map