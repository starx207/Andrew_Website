export class College {
    id:              number;
    name:            string;
    abbreviation?:   string;
    city:            string;
    state:           string;
    degree:          string;
    majors:          string[];
    minor?:          string;
    gpa?:            number;
    graduationDate:  Date;
}