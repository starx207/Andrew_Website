import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule }             from '@angular/forms';

import { AppComponent }            from '../components/app.component';
import { AboutMeComponent }        from '../components/about-me.component';
import { EducationComponent }      from '../components/education.component';
import { WorkExperienceComponent } from '../components/work-experience.component';
import { WorkSamplesComponent }    from '../components/work-samples.component';
import { JobDetailsComponent }     from '../components/job-details.component';
import { CollegeDetailsComponent } from '../components/college-details.component';
//import { CoursesComponent }        from '../components/courses.component';
import { HomeComponent }           from '../components/home.component';
import { ProjectDetailsComponent } from '../components/project-details.component';

import { AppRoutingModule }        from './app-routing.module';

import { EducationService }        from '../services/education.service';
import { JobService }              from '../services/job.service';
import { ProjectService }          from '../services/project.service';
import { ScrollService }           from '../services/scroll.service';
import { ScreenSizeService }       from '../services/screen-size.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent, 
    AboutMeComponent, 
    EducationComponent,
    WorkExperienceComponent,
    WorkSamplesComponent,
    JobDetailsComponent,
    CollegeDetailsComponent,
    //CoursesComponent,
    HomeComponent,
    ProjectDetailsComponent,
  ],
  providers: [ 
    EducationService, 
    JobService,
    ProjectService,
    ScrollService,
    ScreenSizeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
