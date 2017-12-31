var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { JOBS } from '../data-collections/jobs';
var JobService = (function () {
    function JobService() {
    }
    JobService.prototype.getJobs = function () {
        return Promise.resolve(JOBS);
    };
    JobService.prototype.getJob = function (id) {
        return this.getJobs()
            .then(function (jobs) { return jobs.find(function (job) { return job.id === id; }); });
    };
    return JobService;
}());
JobService = __decorate([
    Injectable()
], JobService);
export { JobService };
//# sourceMappingURL=job.service.js.map