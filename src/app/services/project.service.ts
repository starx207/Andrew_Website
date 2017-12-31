import { Injectable } from '@angular/core';

import { Project }    from '../classes/project';
import { PROJECTS }   from '../data-collections/projects';

@Injectable()
export class ProjectService {
    getProjects(): Promise<Project[]> {
        return Promise.resolve(PROJECTS);
    }

    getProject(id: number): Promise<Project> {
        return this.getProjects()
            .then(projects => projects.find(project => project.id === id));
    }

    getProjectsByParentId(companyId: number): Promise<Project[]> {
        return this.getProjects()
            .then(projects => projects.filter(project => project.companyId === companyId));
    }
}