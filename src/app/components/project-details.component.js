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
import { ProjectService } from '../services/project.service';
import { Utility } from '../classes/utility';
import 'rxjs/add/operator/switchmap';
var ProjectDetailsComponent = (function () {
    function ProjectDetailsComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.projectService.getProject(+params['id']); })
            .subscribe(function (project) { return _this.project = project; });
        this.buttons = Array.from(document.getElementsByClassName("work-sub-menu"));
        Utility.showElements(this.buttons);
    };
    ProjectDetailsComponent.prototype.ngOnDestroy = function () {
        Utility.hideElements(this.buttons);
    };
    return ProjectDetailsComponent;
}());
ProjectDetailsComponent = __decorate([
    Component({
        selector: 'project-details',
        templateUrl: './../templates/project-details.component.html',
        styleUrls: ['./../styles/project-details.component.css']
    }),
    __metadata("design:paramtypes", [ProjectService,
        ActivatedRoute])
], ProjectDetailsComponent);
export { ProjectDetailsComponent };
//# sourceMappingURL=project-details.component.js.map