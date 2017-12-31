import { Project } from '../classes/project'

export const PROJECTS: Project[] = [
    {
        id: 1,
        companyId: 1,
        tags: ['SSRS', 'T-SQL'],
        software: 'Revaluation Process',
        title: 'Data Mailer',
        shortDescr: `Data mailers are used at the start of a revaluation to notify property owners of the
                     upcoming revaluation. It includes a letter explaining the revaluation process and
                     information about the property. These were created using SQL Server Reporting Services
                     and T-SQL scripts.`,
        fullDescr: `
            <div class="project data-mailer row">
                <p class="col-xs-12">
                    The data mailer for Muskingum county was the first project I worked on at Appraisal Research
                    Corporation. Data mailers are info sheets that are sent to the owners of each parcel in a county
                    before a revaluation starts. The mailer lets the property owners know that there will be appraisers
                    and photographers making their rounds in the next few weeks to evaluate the value of their property.
                </p>
                <a href="../img/data-mailer-front.png" class="col-xs-6">
                    <img src="../img/data-mailer-front.png" alt="Data Mailer Example" />
                </a>
                <a href="../img/data-mailer-back.png" class="col-xs-6">
                    <img src="../img/data-mailer-back.png" alt="Data Mailer Example" />
                </a>
                <p class="col-xs-12">
                    The back of the mailer shows information about the house on the property (number of rooms, heating,
                    air conditioning, number of fireplaces, etc.) that the owner can verify and mail back to get the best
                    possible value for their home.
                </p>
            </div>
        `,
        infoLearned: `
            <div class="project data-mailer row">
                <p class="col-xs-12">
                    The mailers are created using SQL Server Reporting Services (SSRS). Since this was my first time
                    using SSRS, I had to learn all the basics in order to complete the project. Specifically, I learned:
                </p>
                <div class="col-xs-2"></div>
                <ul class="col-xs-8">
                    <li>Creating report layouts in SSRS</li>
                    <li>Using expressions to mix dynamic and static text</li>
                    <li>Creating tables driven from SQL queries</li>
                    <li>Writing SQL stored procedures that accept different parameter types</li>
                </ul>
            </div>
        `,
    },
    {
        id: 2,
        companyId: 1,
        tags: ['SSRS', 'T-SQL'],
        software: 'ARCvantage',
        title: 'Snapshot',
        shortDescr: `Snapshot is a project dashboard for the ARCvantage web application. It was created
                     using SQL Server Reporting Services and driven with T-SQL scripts.`,
        fullDescr: `
            <div class="project snapshot row">
                <a href="../img/snapshot.jpg" class="col-xs-12">
                    <img src="../img/snapshot.jpg" alt="Snapshot" />
                </a>
                <p class="col-xs-12">
                    After wetting my feet with the data mailers, I jumped in the deep end of SQL Server Reporting Services
                    (SSRS) with Snapshot. At its core, Snapshot is a dashboard for ARCvantage, and ARCvantage is
                    a product that is used for parcel evaluation during a revaluation. Snapshot shows how many parcels
                    are not started, in progress, and completed for each stage of the revaluation process. From there, the
                    user can drill down to one of several reports showing the details behind the data.
                </p>
                <p class="col-xs-8 col-sm-10">
                    Snapshot also has a list of contacts within ARC as well as a project blog. The project managers
                    can use the blog to post messages to the clients, the minutes for project meetings, or whatever else
                    they want the client to be aware of about the project.
                    <a href="../img/snapshot-blog-detail.png" class="hidden-xs blog-detail">
                        <img src="../img/snapshot-blog-detail.png" alt="Full Blog"/>
                    </a>
                </p>
                <a href="../img/snapshot-blogs.png" class="col-xs-4 col-sm-2 blog-slider">
                    <img src="../img/snapshot-blogs.png" alt="Snapshot Blog" class="snapshot" />
                </a>
                <h3 class="col-xs-12">
                    Viewing different stages of the project
                </h3>
                <p class="col-xs-12">
                    <a href="../img/snapshot-slicers.png" class="slicer">
                        <img src="../img/snapshot-slicers.png" alt="Snapshot Slicers" />
                    </a>
                    The slicer buttons along the left side of Snapshot allow the user to track the progress of
                    different stages of the project. The buttons flow from top to bottom according to what stage
                    of the project comes first, second, third, and so on. So a user may click "Photography" to see
                    how many parcels have yet to be photographed, and then click over to "Parcel Review" to see
                    how many parcels the analysts have reviewed so far. A faded button indicates that no data is yet
                    available for that part of the project.
                </p>
                <h3 class="col-xs-12">
                    Get the breakdown
                </h3>
                <p class="col-xs-12">
                    The main portion of Snapshot is the 2 circle graphs in the center. For any stage of the project
                    a user is looking at, the left graphs shows the major milestones: Not Started, In Process, Completed.
                    The right graph shows a breakdown of all the statuses included in a particular milestone. A user can 
                    select a slice of the milestone graph to see the graph on the right change to reflect the breakdown for
                    that milestone. Clicking a slice of the status graph takes the user to a report that shows all the
                    details for all parcels assigned to a particular status.
                </p>
                <a href="../img/snapshot-graphs.png" class="col-xs-12">
                    <img src="../img/snapshot-graphs.png" alt="Snapshot Graphs" />
                </a>
            </div>
        `,
        infoLearned: `
            <div class="project snapshot row">
                <p class="col-xs-12">
                    One of the requirements for Snapshot was that it be done using SSRS to make it as easy to integrate
                    into ARCvantage as possible. However, the high level of interactivity desired for it, meant I had to
                    learn quite a few SSRS tricks to achieve the desired result.
                </p>
                <h3 class="col-xs-12">
                    Lots and Lots of Parameters
                </h3>
                <p class="col-xs-12">
                    I learned how to use hidden parameters to make the report feel like an interactive webpage. Any
                    clickable portion of Snapshot is an action link that reloads the entire report, but changes a
                    certain parameter (while the rest retain their value).
                </p>
                <h3 class="col-xs-12">
                    Dynamic Styling
                </h3>
                <p class="col-xs-12">
                    In order to provide visual feedback to the user when they click various buttons, I learned that
                    I could use expressions to set different styling options for different elements. The expressions would
                    look at the parameter values to determine if a particular button was selected, and style it accordingly.
                    Some styles were also data-driven, such as when no data is available for a particular stage of the project
                    so the button appears grayed-out.
                </p>
                <h3 class="col-xs-12">
                    Dynamic Action Links
                </h3>
                <p class="col-xs-12">
                    In addition to styling, some elements required their action to change based on data availability or 
                    parameter selections. The status graph would have to launch different reports with different
                    pre-selected parameters depending on which stage of the project was being viewed. The project stage
                    slicers would have to have thier actions disabled if there was no data available for that stage.
                </p>
                <h3 class="col-xs-12">
                    Stored Procedure Optimization
                </h3>
                <p class="col-xs-12">
                    Most project stages have statuses manually assigned by the reviewers. To report these, they simply have
                    to be aggregated from a status table. However, the statuses for photography and footprints are derived
                    from other data. The SQL that derives these statuses can sometimes take a while because of calculations
                    that have to be done with geometry data types. I had to spend a lot of time learning different query
                    optimization and tuning methods to allow Snapshot to load as fast as possible.
                </p>
            </div>
        `,
        refactoring: `
            <div class="project snapshot row">
                <p class="col-xs-12">
                    If I were to do this project over again, I would strongly suggest the project not be done in SSRS. 
                    Doing so made it easy to integrate into ARCvantage, but a lot of functionality that
                    should have been easily implemented was not so easy because SSRS isn't designed to support it.
                </p>
                <p class="col-xs-12">
                    I believe writing Snapshot as a web-application would be a much better and more robust solution. It 
                    would boost the performance of Snapshot considerably because it would be able to take advantage of 
                    AJAX to only reload the relevant portions of Snapshot, instead of reloading the whole thing every time
                    anything is clicked. It would also allow for much easier maintainability. The complex expressions used
                    to give Snapshot its current interactivity would be pretty difficult to dicipher for someone else trying
                    to come in and make changes to it.
                </p>
            </div>
        `,
    },
    {
        id: 3,
        companyId: 1,
        tags: ['VB.NET', 'Windows Forms', 'SQL', 'Infragistics'],
        software: 'ARCCama',
        title: 'Field Review Subsystem',
        shortDescr: `The Field Review Subsystem was developed to allow clients to track and maintain Field
                     Reviews. A Field Review may be requested by the parcel analyst during a revaluation if
                     the photographs taken are not sufficent to assign an accurate value to the property.
                     This was developed as part of the ARCCama Windows Forms Application using VB.NET.`,
        fullDescr: `
            <div class="project field-review row">
                <p class="col-xs-12">
                    When the photographs taken by the photographers during a revaluation aren't enough for the
                    analysts to accurately assess the value of a parcel, it's time to call for a field review.
                    A field review involves a Field Lister visiting a parcel in person in order to obtain information
                    needed to complete the assessment of the parcel.
                </p>
                <p class="col-xs-12">
                    The Field Review Subsystem is a component of ARCama that allows the Field listers to keep track
                    of requested field reviews. When the screen is opened, the user sees a grid of all the requested
                    field reviews that have not yet been completed. Completed field reviews can optionally be loaded
                    by submitting a date range - doing so will load all field reviews completed within the requested
                    range, as well as incomplete reviews.
                </p>
                <a href="../img/field-review-grid.jpg" class="col-xs-12">
                    <img src="../img/field-review-grid.jpg" alt="Field Review Grid" />
                </a>
                <p class="col-xs-12">
                    There are additional screens from which field reviews can be added, altered, or deleted. When a new
                    field review is requested, it can be added from here. When a review is completed, the date it was
                    completed can be added to the request so it no longer shows up in the incomplete list. New field
                    reviews can also be added by uploading them through an excel spreadsheet.
                </p>
            </div>
        `,
        refactoring: `
            <div class="project field-review row">
                <p class="col-xs-12">
                    When I created this subsystem, the design specs called for a main page that would show the
                    grid of incomplete reviews, and 3 other screens: add, edit, and delete. Because I hadn't had much
                    experience in .NET at this point, I made 4 separate screens to accomplish this. A better implementation
                    would have been to simply use 2. One screen would have been the grid screen, and the other would be
                    the add/edit/delete screen. The add/edit/delete screen would change functionality and appearance based
                    on which button the user would click to get to it.
                </p>
                <a href="../img/field-reviews-add.png" class="col-xs-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-0">
                    <img src="../img/field-reviews-add.png" alt="Field Review Grid" />
                </a>
                <a href="../img/field-reviews-edit.png" class="col-xs-12 col-sm-6 col-lg-4">
                    <img src="../img/field-reviews-edit.png" alt="Field Review Grid" />
                </a>
                <a href="../img/field-reviews-delete.png" class="col-xs-12 col-sm-6 col-lg-4">
                    <img src="../img/field-reviews-delete.png" alt="Field Review Grid" />
                </a>
                <p class="col-xs-12">
                    Implementing it in this way would have also allowed me to adhere to a DRY design. Having 4 separate
                    screens meant I had to repeat a lot of the same code 3 times; I now know that this is not a good
                    implementation as it is difficult to maintain. It also makes it more tedious to fix bugs as they 
                    have to be fixed in 3 places instead of just one.
                </p>
            </div>
        `
    },
    {
        id: 4,
        companyId: 1,
        tags: ['VB.NET', 'XSLT', 'XML', 'SQL', 'Windows Forms'],
        software: 'ARCTax',
        title: 'Taxbill Template Redesign',
        shortDescr: `The ARCTax tax bills used to be created using a pretty rigid custom-coded template system.
                     The structure made it very difficult to make changes to the tax bills. The redesign of the
                     tax bill templates utilized XSLT to make the tax bills more dynamic and flexible. This 
                     allowed for changes to the tax bills to be rapidly deployed at the client's request.`,
        fullDescr: `
            <div class="project taxbill-template row">
                <h3 class="col-xs-12">
                    Out with the old
                </h3>
                <p class="col-xs-12">
                    To print tax bills, ARCtax uses two XML files. The first is called an extract and contains the
                    raw data that will be contained in the tax bill. The second is the template and provides
                    instructions to the software of what to draw on the tax bill, where to put it, and where
                    in the extract the information can be found.
                </p>
                <p class="col-xs-12">
                    The original architecture of the templates only allowed for display of values in the extract.
                    If several values needed to be summed up and displayed, they had to be summed up and written to
                    the extract before-hand. It also did not support dynamic content; if a penalty line was required
                    to be displayed for people who were late in their payments, it had to be statically displayed
                    for all tax bills and simply show zero as the amount if no penalty was charged.
                </p>
                <h3 class="col-xs-12">
                    In with the new
                </h3>
                <p class="col-xs-12">
                    <a href="../img/tax-bill.png" class="bill-example">
                        <img src="../img/tax-bill.png" alt="Tax Bill Example" />
                    </a>
                    The redesigned tax bill templates utilized XSLT to allow the template itself to manipulate the
                    data provided by the extract, as well as conditionally display various content. The new template
                    took the XML in the extract, performed some manipulations to the data, and reformatted it as XML
                    that the software could interpret into print graphics.
                </p>
                <p class="col-xs-12">
                    There are 6 basic configurations for property tax bills. Tax bills for real estate properties
                    and for mobile home properties have different configurations, and each of those has a different
                    configuration depending on whether it is a 1st half, 2nd half, or delinquent bill. Another improvement
                    brought by the new templates was that each county would only need a single template rather than 6,
                    because the template could dynamically determine the content to display.
                </p>
                <p class="col-xs-12">
                    The last major improvement the redesigned templates offered was how quickly they could be altered
                    and deployed. The old templates had to be installed with the software, so when a client requested
                    a change to their tax bill format, the software had to be reinstalled after the changes were made.
                    The new templates were stored on a server, which meant changes could be instantly deployed upon
                    request. No installation necessary!
                </p>
            </div>
        `,
        infoLearned: `
            <div class="project taxbill-template row">
                <h3 class="col-xs-12">
                    Creating the templates
                </h3>
                <p class="col-xs-12">
                    This project started when another developer suggested XSLT as a technology we could
                    possibly use to redesign the tax bill templates. Since I was still the new developer, the project
                    was assigned to me. I had never heard of XSLT before, so I had to spend some time learning all about
                    it.
                </p>
                <a href="../img/taxbill-template-xslt.png" class="col-xs-12">
                    <img src="../img/taxbill-template-xslt.png" alt="Bill Template Example" />
                </a>
                <p class="col-xs-12">
                    I learned how to create resuable templates by passing parameters to the templates. I used
                    a collection of generic templates to make designing the tax bill templates for each county easier.
                    The generic templates are for things like tables and labels that are used frequently for the 
                    tax bills.
                </p>
                <h3 class="col-xs-12">
                    Integrating with .NET
                </h3>
                <p class="col-xs-12">
                    <a href="../img/apply-xslt-with-params.png" class="dot-net-example">
                        <img src="../img/apply-xslt-with-params.png" alt="Applying XSLT Sample" />
                    </a>
                    Once the tax bills were designed, I had to learn how to use .NET to apply the XSLT stylesheet
                    to the extract that was generated. Additionally, the VB.NET code had to be able to pass parameters
                    to the stylesheet to specify which type of tax bill to print (1st half, 2nd half, delinquent, Real
                    Estate, Mobile Home).
                </p>
                <p class="col-xs-12">
                    In addition to printing tax bills one at a time, there's also functionality for mass printing
                    where several hundred bills can be sent to the printer at once. However, when processing the 
                    templates for such a large number of tax bills, the software would appear to freeze as it did
                    the processing. To solve that issue, I had to learn how to run the print job as a detached
                    process that provides feedback to the user as it processes.
                </p>
            </div>
        `,
        refactoring: `
            <div class="project taxbill-template row">
                <p class="col-xs-12">
                    The original method for printing tax bills used approximately 10 different classes for interpretting
                    different XML tags. There was an object for a line of text, an object for shapes, an object for containers,
                    and so on. All these classes worked fine, but as I was looking through the old code, trying to figure out
                    how it worked before I started the redesign, I decided to do away with most of it and simplify it down to
                    just 2 classes: one for text, and one for shapes.
                </p>
                <p class="col-xs-12">
                    I spent a lot of time learning how print graphics worked in .NET, and writing the 2 classes that would
                    interpret the XML. All of that work ate up a lot of development time. I think I could have completed
                    the project much more quickly and still been able to implement the important improvements had I just
                    kept the existing .NET structure and used XSLT to make the template dynamic. However, despite creating
                    more work for myself by taking this approach, I feel that my desing will be easier for future
                    developers to understand should someone else have to modify it in any way.
                </p>
            </div>
        `
    },
    {
        id: 5,
        companyId: 1,
        tags: ['VB.NET', 'XSLT', 'XML', 'SQL', 'Windows Forms', 'Infragistics'],
        software: 'ARCTax',
        title: 'Restructuring of Logging processes',
        shortDescr: `Many of the detached batch processes that could be run in ARCTax log their results. However,
                     they didn't all write their logs to the same location or use the same method. The restructuring
                     involved evaluating all these processes and developing a way to ensure they were all logged 
                     the same way so that there could be one single place in the software to check any log.`,
        fullDescr: `
            <div class="project logging row">
                <p class="col-xs-12">
                    There are many batch processes in ARCtax that create logs of their results. Processes like calculating
                    taxes for a particular tax year, posting penalty and interest charges, and tax extract generation all
                    log their results for the user. There were two issues that had to be addressed during the restructuring.
                </p>
                <h3 class="col-xs-12">
                    Location, Location, Location
                </h3>
                <p class="col-xs-12">
                    The logging processes were worked on by many developers over many years, and because there was no standard
                    method for doing it, each developer used his or her own slightly different method. Additionally, there
                    were multiple tables in the database where logs could be stored (one process would even create its own
                    table, if it didn't yet exist, and log to it). Put these two things together and it made it difficult for
                    users to know which screen to go to in order to see a log from a particular process.
                </p>
                <p class="col-xs-12">
                    After doing a thorough analysis on the various methods used for logging, I came up with a way to have
                    all the processes log their results the same way. I created a class for running a process in a detached
                    thread and logging the results automatically. All that had to be done by the developer using it was to
                    assign a name to the process and give it a function delegate that does the actual processing to be logged.
                    Optionally, the developer could choose to write a custom log that would be stored rather than the default
                    log the class provides. All other references in the code that allowed for writing to logging tables in the
                    database were removed so that only the logging class could write to those tables.
                </p>
                <h3 class="col-xs-12">
                    Prettying things up
                </h3>
                <p class="col-xs-12">
                    The other task involved in the restructuring was to make the logs more readable. All the logs up to 
                    that point were purely text. Developers would try and give them a table-like appearance by using tabs
                    to align columns of text, but this didn't always work depending on the length of the value being
                    displayed. It was also not possible to right-align numbers for easy accounting. These limitations
                    would sometimes make the logs appear almost unreadable.
                </p>
                <a href="../img/old-log.jpg" class="col-xs-12">
                    <img src="../img/old-log.jpg" alt="Old Log Example" />
                </a>
                <p class="col-xs-12">
                    To remedy these issues, I created a log class that could both create and interpret XML logs. I included
                    an object made from the log class in the logging class so that a developer can choose to either write
                    a custom log as plain text, or as XML. When displaying the logs, the log class can render the XML in
                    a few different formats. The main formats are bitmap and excel. The bitmap format is used to display
                    the log as a nicely formatted image graphic so that it can be easily read. The excel format is used
                    to export the log to an excel spreadsheet so the data can be further manipulated if needed.
                </p>
                <a href="../img/new-log.jpg" class="col-xs-12">
                    <img src="../img/new-log.jpg" alt="New Log Example" />
                </a>
            </div>
        `,
        infoLearned: `
            <div class="project logging row">
                <p class="col-xs-12">
                    In this project, I was able to further expand my understanding of XSLT. When doing the tax bill
                    template redesign, I used parameterized templates that had to have data values passed to them. For this
                    project, however, I utilized XSLT's template matching to take the XML in the logs and add various
                    attributes to the elements that defined how different tags should be styled.
                </p>
                <p class="col-xs-12">
                    In addition to the XSLT, I learned a bit about how to create and render bitmaps dynamically. I had
                    already worked with graphics for tax bill printing, but I found that creating graphics to render to
                    the screen was a bit different. Once I had a bitmap created, I would add it to a .NET picture box.
                    To make things easier, I added "picture box" as a render format. The picture box returned then had
                    to be added to a container on the screen so that it could be scrolled, if it was too big to fit on
                    the screen.
                </p>
            </div>
        `,
    },
    {
        id: 6,
        companyId: 1,
        software: 'Revaluation Process',
        tags: ['ASP.NET', 'MVC', 'ADO.NET', 'Entity Framework'],
        title: 'Informal Hearing Website',
        shortDescr: `At the end of a revaluation, property owners are given the chance to ask questions about thier
                     new property values. This process is called Informal Hearings and used to be done in-person at the
                     county courthouse. The Informal Hearing Website, created using ASP.NET MVC 5, allows property owners to submit 
                     inquiries about their new property values online.`,
        fullDescr: `
            <div class="project informal-website row">
                <p class="col-xs-12">
                    One of the final steps in the revaluation process is Informal Hearings. After the new property
                    values are determined, they are made public on the county website so that property owners
                    can see their new values. At this point, a property owner may believe their property was valued
                    incorrectly and wish to present evidence that the value should be higher or lower. Or they may
                    just have questions about how the value was determined.
                </p>
                <p class="col-xs-12">
                    In the past, to submit an Informal Inquiry, a property owner would have to come talk to a
                    representative of the appraisal firm during set times at the county courthouse. The Informal
                    Hearing Website makes it possible for property owners to check their new values and immediately
                    submit inquiries about the new values.
                </p>
                <a href="../img/informal-main-page.png" class="col-xs-6">
                    <img src="../img/informal-main-page.png" alt="Informal Hearings Home Page" />
                </a>
                <a href="../img/informal-faq-page.png" class="col-xs-6">
                    <img src="../img/informal-faq-page.png" alt="Informal Hearings FAQ Page" />
                </a>
                <a href="../img/informal-links.jpg" class="col-xs-12">
                    <img src="../img/informal-links.jpg" alt="Informal Hearings Value Lookup Links" />
                </a>
                <p class="col-xs-12">
                    The website itself is not complicated. It consists of 2 pages. The main page gives a brief
                    description of the revaluation process, links to view the new property values, and a place
                    to download an inquiry form that can be emailed or mailed back. The second page is a Frequently
                    Asked Questions page. Each county that has ARC do their revaluation can use the site for
                    their informal hearing process. When the site was initally launched, 9 counties were using it.
                </p>
                <h3 class="col-xs-12">
                    Behind the scenes
                </h3>
                <p class="col-xs-12">
                    The original design of the website called for a simple layout to be created for one county, and
                    then modify it for each of the 9 counties by basically doing a copy and paste. I thought this
                    approach sounded tedious and difficult to maintain, especially since more counties than the 
                    original 9 would start using the website in the future. I suggested that instead of that 
                    statically coded approach, we make certain portions of the website dynamic and data-driven. The 
                    end result is a single repository of code to maintain that pulls county-specific information from
                    a database when the website loads. The URL used to navigate to the site tells the site which
                    county's information should be loaded.
                </p>
                <p class="col-xs-12">
                    Check out a few of the live webpages here:
                </p>
                <ul class="col-xs-12">
                    <li><a href="http://henrycounty.propertyrevaluations.com">Henry County</a></li>
                    <li><a href="http://mercercounty.propertyrevaluations.com">Mercer County</a></li>
                    <li><a href="http://vanwertcounty.propertyrevaluations.com">Van Wert County</a></li>
                    <li><a href="http://preblecounty.propertyrevaluations.com">Preble County</a></li>
                </ul>
                <p class="col-xs-12">
                    I created the website using a mobile-first MVC design pattern using Entity Framework for the scaffolding.
                    The model was really only used to provide the county-specific information to the site, and as 
                    such should never be changed by the code. To ensure that it wouldn't be, I modified the ADO.NET
                    model created by the scaffolding to be read-only, and took away the ability for the model to
                    save any changes made to it. Additionally, the server connection was read-only to add an extra
                    layer of protection.
                </p>
                <p class="col-xs-12">
                    <a href="../img/informal-error-email.png" class="error-snippet">
                        <img src="../img/informal-error-email.png" alt="Error Handling Code Snippet" />
                    </a>
                    The last behind-the-scenes feature to note is the error handling for the site. I created a 
                    global filter to catch errors anywhere in the site. From the user's perspective, nothing
                    happens except being redirected to an error page which asks them to try again later. However,
                    whenever that error filter is hit, it sends an email to the designated administrator with the
                    details of the error as well as which site it occurred on so that we can proactively fix any
                    issues with any of the sites. It allows us to monitor the site performance without having to
                    keep checking on all 9 sites (and more in the future).
                </p>
            </div>
        `,
        infoLearned: `
            <div class="project informal-website row">
                <p class="col-xs-12">
                    Before this project, I had dabbled in web development on my own a number of times, but this was the
                    first time I made a website that was actually published. I learned some of the nuiansces of
                    troubleshooting a website on a production server. After I had done all the development I needed
                    to do and published the website on our production server, I discovered that a few things that worked
                    in my development environment didn't work in production. I also learned that all the features and
                    functionality need to be tested on all the major browsers your users would be navigating to your site
                    from. There were little quirks I kept discovering that would only occur on certain browsers, so I had
                    to ensure the site functioned well no matter what browser it was on.
                </p>
                <p class="col-xs-12">
                    Since this website was made using ASP.NET MVC 5, I learned the basics of Scaffolding with Entity
                    Framework. It's a small site, so I didn't have to go too deep into it (I went into a lot more
                    depth with my next project: the admin website), but I was able to get my feet wet learning 
                    the basics of Models, Views, and Controllers.
                </p>
            </div>
        `,
        refactoring: `
            <div class="project informal-website row">
                <p class="col-xs-12">
                    By the time I was brought in on this project, many meetings had already been held to determine
                    the design for the site, and I had a limited timeframe in which to complete the site before it
                    was needed by our clients. One aspect of the design I did not like was the fact that to submit
                    an inquiry, a user had to download a PDF form, fill it out (either electronically or print it and
                    complete it by hand), and then either mail or email the form back.
                </p>
                <div class="hidden-xs col-sm-3"></div>
                <a href="../img/informal-mobile-view.jpg" class="col-xs-12 col-sm-6">
                    <img src="../img/informal-mobile-view.jpg" alt="Informal Website Mobile Format" />
                </a>
                <p class="col-xs-12">
                    I thought that a much better way to do it would have been to create a web form that could be
                    filled out right from the site and submitted to our analysts. Because the reason for wanting the
                    inquiries in PDF form was so that we could have documentation of it, I suggested that the site 
                    could convert the submitted web form into a PDF and email it to the analyst responsible for 
                    handling the inquires. I believe that would have made the site much easier to use and still have
                    met all of our company's needs.
                </p>
                <p class="col-xs-12">
                    In the end, because of time restraints, we decided to keep the site as originally designed
                    with a downloadable PDF. A future version of the site may be done to include a more user-friendly
                    web form for inquiry submission.
                </p>
            </div>
        `
    },
    {
        id: 7,
        companyId: 1,
        tags: ['ASP.NET', 'MVC', 'ADO.NET', 'Entity Framework', 'Repository Design Pattern', 'DRY'],
        software: 'ARCvantage / Informal Website',
        title: 'Administrative Website',
        shortDescr: `Both the Informal Hearings Website and Snapshot have elements that can be curated by the project managers.
                     This admin website was created to allow the project managers control over the portions of those products
                     that they needed to change on a regular basis. It was created with ASP.NET MVC 5 and implements custom 
                     user authentication to allow access to the site.`,
        fullDescr: `
            <div class="project admin-site row">
                <p class="col-xs-12">
                    I came up with the idea to create this administration web site because, after doing the Informal 
                    Hearing web site, no one was yet able to give me all the needed information to complete all 9 sites.
                    When I asked, I was told that we didn't have the information yet, so I ended up coding that website
                    to simply say "TBD" if certain information wasn't available. Because that information was contained
                    in a database, I thought that I should just make another website that our project managers could use
                    to update the information themselves when it became available.
                </p>
                <a href="../img/admin-blog-index.jpg" class="col-xs-12">
                    <img src="../img/admin-blog-index.jpg" alt="Admin Site Blog Manager" />
                </a>
                <p class="col-xs-12">
                    After I started working on this admin site for the project managers, I thought about how they still
                    needed something to be able to manage contact information and blog entries in Snapshot, so I decided
                    to expand this web site to provide basic CRUD operations for those as well.
                </p>
                <a href="../img/admin-blog-edit.jpg" class="col-xs-12">
                    <img src="../img/admin-blog-edit.jpg" alt="Admin Site Blog Editor" />
                </a>
                <p class="col-xs-12">
                    I'm particularly proud of this project because it was mine from start to finish. I came up with the
                    idea for it, designed it, and coded it. As such, I was able to use whatever design patterns I thought
                    best in creating the site, and endeavored to use all the best practices for web development and MVC
                    design that I knew.
                </p>
            </div>
        `,
        infoLearned: `
            <div class="project admin-site row">
                <p class="col-xs-12">
                    I wet my feet in MVC design patterns with the Informal Hearings website, but with this site, I 
                    went all in. I learned how to take the scaffolded views and controllers and customize them to
                    my needs. I learned how to use the BindAttribute to prevent overposting attacks.
                </p>
                <p class="col-xs-12">
                    <a href="../img/admin-repository-snippet.png" class="repository-snippet">
                        <img src="../img/admin-repository-snippet.png" alt="Repository Code Snippet" />
                    </a>
                    I learned how to create a loosely coupled model layer using the repository desing pattern. I created
                    a repository layer between my models and controllers so that a controller never directly calls
                    a method associated with a model. Instead, the controller calls repository methods which in turn
                    call the appropriate model methods. This way, changes in the model implementation do not effect
                    the controller's functionality.
                </p>
                <h3 class="col-xs-12">
                    Keeping it DRY
                </h3>
                <p class="col-xs-12">
                    There were several methods I learned to use in order to make my code DRY. First, I learned to use
                    data annotations in the models for data validation, which allowed me to define the validation rules
                    for a particular field in the model only once, but enforce it everywhere. Second, because the site
                    requires a username and password be authenticated before a user can access the site, I created 2
                    custom action filters for authentication. 
                </p>
                <a href="../img/admin-action-filter-snippet.png" class="col-xs-12">
                    <img src="../img/admin-action-filter-snippet.png" alt="Login Action Filter" />
                </a>
                <p class="col-xs-12">
                    The first filter was to ensure that a valid user was logged in before allowing them to proceed. 
                    The second made sure that the logged in user actually had permission to access the particular 
                    portion of the site they were trying to access (users could be given access to only certain
                    function points of the site by site administrator). I set these 2 filters to be
                    applied to all controller actions so they were validated everytime - even when the page was
                    accessed through a deep link.
                </p>
                <div class="hidden-xs col-sm-2"></div>
                <a href="../img/admin-action-filter-applied.png" class="col-xs-12 col-sm-8">
                    <img src="../img/admin-action-filter-applied.png" alt="Login Action Filter Application" />
                </a>
            </div>
        `
    }
]