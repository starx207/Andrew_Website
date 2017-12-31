import { Job } from '../classes/job';

export const JOBS: Job[] = [
    {
        id: 1,
        company: "Appraisal Research Corporation",
        compAbbr: "ARC",
        startDate: new Date(2016, 5, 27),
        title: "Software Developer",
        city: "Findlay",
        state: "OH",
        companyDesc: `
            <p>
                <abbr title="Appraisal Research Corporation">ARC</abbr> is a mass appraisal company that has
                been operating out of Findlay, Ohio for the last 40 years, with clients in both Ohio and Indiana. 
                Mass appraisals (called a "revaluation") are conducted in every county in Ohio every 6 years 
                and every 4 years in Indiana. The property values resulting from these revaluations are used by 
                county governments to determine property taxes.
            </p>
        `,
        jobDesc: `
            <p>
                ARC was my first job as a Software Developer out of college. The IT department was small, consisting
                of only 9 people before I was hired. Because it was such a small operation, I had the opportunity to
                be a part of quite a variety of project types ranging from Windows Forms applications in VB.NET, to
                SQL Server Reporting Services reports and ASP.NET MVC websites.
            </p>
        `,
        logo: 'ARCLogo.png',
    },
    {
        id: 2,
        company: "Marathon Petroleum Corporation",
        compAbbr: "MPC",
        startDate: new Date(2013, 7, 26),
        endDate: new Date(2013, 11, 20),
        title: "Marine IT Intern",
        city: "Findlay",
        state: "OH",
        companyDesc: `
            <p>
                <abbr title="Marathon Petroleum Corporation">MPC</abbr> is an energy company headquartered in Findlay,
                Ohio that services most of the Midwest United States. Primarily, they are a petroleum company with
                refineries dotted all over the midwest and beginning to reach as far west as Texas. Marathon is 
                probably most widely known for their gas station chains: Marathon and Speedway.
            </p>
        `,
        jobDesc: `
            <p>
                I interned at MPC in the Fall of 2013. My situation was unique in that although I was an IT intern,
                I worked in the Marine Transportation department. The Marine department was in the midst of working
                with a 3rd party developer to implement a new logistics software for tracking their barges that operate
                on the major rivers of the Midwest (Ohio River, Mississippi River, etc.). I functioned as a go between
                for the MPC business group and the 3rd party developers because I had an understanding of both sides of
                the project. In addition to this, I also worked on a couple smaller projects during my internship at
                Marathon.
            </p>
        `,
    },
    {
        id: 3,
        company: "The Home Depot",
        compAbbr: "THD",
        startDate: new Date(2014, 5, 26),
        endDate: new Date(2016, 5, 18),
        title: "Paint Sales Associate",
        city: "Bowling Green",
        state: "OH",
        companyDesc: `
            <p>
                <abbr title="The Home Depot">THD</abbr> is a home improvement retailer box-chain. 
                Contractors and DIYers alike rely on THD for the tools and materials they need for their job.
                THD is committed to its goal of being the #1 customer service retailer in the country and as
                such, they make sure their employees are well equipped to be able to assist customers with a
                variety of project types.
            </p>
        `,
        jobDesc: `
            <p>
                I started working at THD part-time in college as a Lot Attendant. My main responsibility was to
                assist customers with loading their purchases. This required a lot of heavy lifting as I was often
                helping load large orders of lumber, concrete, and drywall. I had to perform my job cheerfully as I
                was often the last contact customers had with a store employee before they left.
            </p>
            <p>
                After my first year, I was promoted to a Sales associate in the Paint Department. Here, my responsibilites
                were to mix paint for customers, assist customers in choosing from our myriad colors, sheens, and types
                of paint according to their preferences and project needs, and to actively seek out customers to advise on
                the other products in my department: wood stains, adhesives, concrete resurfacing materials, and equipment.
            </p>
        `,
    },
    {
        id: 4,
        company: "Biaggi's Ristorante Italiano",
        compAbbr: "Biaggi's",
        startDate: new Date(2010, 8, 22),
        endDate: new Date(2013, 7, 16),
        title: "Food Runner",
        city: "Perrysburg",
        state: "OH",
        companyDesc: `
            <p>
                Biaggi's is an italian restaurant in Perrysburg, Ohio's Levis Commons Shopping Center. The
                restaurant is part of an 20 store chain headquarted in Bloomington, Illinois. It offers a
                casual dining experience punctuated by its affordable wine selection from around the world
                including Italy and the United States.
            </p>
        `,
        jobDesc: `
            <p>
                I started working at Biaggi's as a busser, but was later promoted to Food Runner. My job
                was to assist the Head and Sous Chef on the expo line. I would ensure the finishing touches
                for each dish were in place before food was delivered, and I would assist the servers in taking
                food to the tables in a timely manner.
            </p>
        `
    }
]