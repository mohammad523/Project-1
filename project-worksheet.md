# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description/ Wireframes/ Project Schedule/ Timeline | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 3| Animations & Fonts | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete

## Three Sites I was inspired by
| Link To Site | One thing I'd Like to Incorporate | Initial Research On that Item
|---|---| ---|
|https://lucas-perret.com/| Entire layout, fonts, and animations | google
|https://www.ivantoma.com/| Mouse pointer | google
|https://cathrine.co/| Nav Layout | 

## Project Description

A simple and elegant portfolio site with many animations that convey my projects and skills. 

## Google Sheet

- [My Google Sheet](https://docs.google.com/spreadsheets/d/1Lr-7W36wo2GZnze7boYYSbOX7z52WM-rZNGY7xfMab0/edit#gid=0) 



### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Basic site with all the intended text
- Nav menu/ hamburger
- Fonts 
- CSS Grid
- Flexbox
- Responsive Layout

#### PostMVP 

- Animations
- Bug fixes

## Functional Components

Functional Nav menu, Hamburger, and language filter.

#### MVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger | H | 3hr | 6hr | -hr|
| Project Previews | H | 2hr | 1hr | -hr|
| Regular Nav | H | 3H | 3hr | -hr|
| Adding Form | H | 3hr| 4hr | -hr |
| CSS Grid and Flex| M | 3hr | 2hr | -hr|
| Working with API | H | 3hrs| 5hr | -hr |
| Responsive | H | 3hr | 2hr | -hr|
| Total | H | 26hrs| 19hrs |  |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hover | L | 3hr | 0hr | -hr|
| Custom Cursor | M | 2hr | 1hr | -hr|
| Make own icon | L | 2hr | 1hr | -hr|
| Total | H | 7hrs| 2hrs | -hrs |

## Additional Libraries
 jQuery, Kursor.JS(unpkg.com), Google fonts

## Code Snippet


```
function app(projectsArr) {
    console.log('inside app - projectsArr', projectsArr)
    projectsArr.forEach( project => { 
        let projectsDiv = $('.projectsDiv');
        let myProject = $('<div>').attr('class', 'myProject');
        let projectName = $('<h6>').text(project.title).attr('class', 'projectName');
        let projectPic = $('<img>').attr('src',  project.image).attr('class','images');
        let projectDescription = $('<p>').attr('class', project.description);
        let projectLink = $('<a>').attr('href', project.url).attr('class', 'button');
        let overlay = $('<div>').attr('class','overlay')
        projectLink.append(projectPic);
        myProject.append(myProject, projectName,  projectDescription, projectLink);
        projectsDiv.append(myProject);
        myProject.append(overlay)

        
    })
}

}
```

## Issues and Resolutions


**ERROR**: jQuery errors only when hosting.                            
**RESOLUTION**: Changing the jQuery link around

## Youtube Link
https://youtu.be/tK0McRGW8y0
