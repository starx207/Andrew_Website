var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from '../components/about-me.component';
import { EducationComponent } from '../components/education.component';
import { WorkExperienceComponent } from '../components/work-experience.component';
import { WorkSamplesComponent } from '../components/work-samples.component';
import { JobDetailsComponent } from '../components/job-details.component';
import { CollegeDetailsComponent } from '../components/college-details.component';
//import { CoursesComponent }        from '../components/courses.component';
import { HomeComponent } from '../components/home.component';
import { ProjectDetailsComponent } from '../components/project-details.component';
var ROUTES = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'AboutMe', component: AboutMeComponent },
    { path: 'Education', component: EducationComponent },
    { path: 'WorkExperience', component: WorkExperienceComponent },
    { path: 'WorkSamples', component: WorkSamplesComponent },
    { path: 'JobDetails/:id', component: JobDetailsComponent },
    { path: 'ProjectDetails/:id', component: ProjectDetailsComponent },
    { path: 'CollegeDetails/:id', component: CollegeDetailsComponent },
    //{ path: 'Courses',            component: CoursesComponent },
    { path: '**', redirectTo: '/Home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(ROUTES)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map