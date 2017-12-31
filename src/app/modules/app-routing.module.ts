import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { AboutMeComponent }        from '../components/about-me.component';
import { EducationComponent }      from '../components/education.component';
import { WorkExperienceComponent } from '../components/work-experience.component';
import { WorkSamplesComponent }    from '../components/work-samples.component';
import { JobDetailsComponent }     from '../components/job-details.component';
import { CollegeDetailsComponent } from '../components/college-details.component';
//import { CoursesComponent }        from '../components/courses.component';
import { HomeComponent }           from '../components/home.component';
import { ProjectDetailsComponent } from '../components/project-details.component';

const ROUTES: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home',               component: HomeComponent },
    { path: 'AboutMe',            component: AboutMeComponent },
    { path: 'Education',          component: EducationComponent },
    { path: 'WorkExperience',     component: WorkExperienceComponent },
    { path: 'WorkSamples',        component: WorkSamplesComponent },
    { path: 'JobDetails/:id',     component: JobDetailsComponent },
    { path: 'ProjectDetails/:id', component: ProjectDetailsComponent },
    { path: 'CollegeDetails/:id', component: CollegeDetailsComponent },
    //{ path: 'Courses',            component: CoursesComponent },
    { path: '**', redirectTo: '/Home', pathMatch: 'full' }
]

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }