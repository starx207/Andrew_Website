import { Injectable }           from '@angular/core';

import { College }              from '../classes/college';
import { HighSchool }           from '../classes/highschool';
import { COLLEGES, HIGHSCHOOL } from '../data-collections/education';

@Injectable()
export class EducationService {
    getColleges(): Promise<College[]> {
        return Promise.resolve(COLLEGES);
    }

    getCollege(id: number): Promise<College> {
        return this.getColleges()
            .then(colleges => colleges.find(college => college.id === id));
    }

    getHighSchool(): Promise<HighSchool> {
        return Promise.resolve(HIGHSCHOOL);
    }

    stringifyMajors(college: College): string {
        var allMajors: string = "";
        college.majors.forEach(major => {
            allMajors = allMajors + major + ", ";
        })

        return allMajors.slice(0, allMajors.length - 2);
    }
}