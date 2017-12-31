import { Injectable } from '@angular/core';

import { Job }        from '../classes/job';
import { JOBS }       from '../data-collections/jobs';

@Injectable()
export class JobService {
    getJobs(): Promise<Job[]> {
        return Promise.resolve(JOBS);
    }

    getJob(id: number): Promise<Job> {
        return this.getJobs()
            .then(jobs => jobs.find(job => job.id === id));
    }
}