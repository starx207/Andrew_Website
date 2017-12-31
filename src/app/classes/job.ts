export class Job {
    id:           number;
    company:      string;
    compAbbr:     string;
    startDate:    Date;
    endDate?:     Date;
    title:        string;
    city:         string;
    state:        string;
    companyDesc?: string;
    jobDesc?:     string;
    logo?:        string;
}