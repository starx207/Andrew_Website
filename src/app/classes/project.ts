export class Project {
    id:           number;
    companyId:    number;
    software?:    string;
    title:        string;
    shortDescr:   string;
    fullDescr:    string;
    tags:         string[];
    infoLearned?: string;
    refactoring?: string;
}