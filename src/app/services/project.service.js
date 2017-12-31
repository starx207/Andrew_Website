var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { PROJECTS } from '../data-collections/projects';
var ProjectService = (function () {
    function ProjectService() {
    }
    ProjectService.prototype.getProjects = function () {
        return Promise.resolve(PROJECTS);
    };
    ProjectService.prototype.getProject = function (id) {
        return this.getProjects()
            .then(function (projects) { return projects.find(function (project) { return project.id === id; }); });
    };
    ProjectService.prototype.getProjectsByParentId = function (companyId) {
        return this.getProjects()
            .then(function (projects) { return projects.filter(function (project) { return project.companyId === companyId; }); });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Injectable()
], ProjectService);
export { ProjectService };
//# sourceMappingURL=project.service.js.map