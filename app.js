console.log("this is jQuery", $)

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.navList');

    burger.addEventListener('click',()=>{
        navList.classList.toggle('nav-active');
    });
}

navSlide();


const sheetUrl = 'https://docs.google.com/spreadsheets/d/1Lr-7W36wo2GZnze7boYYSbOX7z52WM-rZNGY7xfMab0/edit#gid=0'

//sheetAsJSON
const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/1Lr-7W36wo2GZnze7boYYSbOX7z52WM-rZNGY7xfMab0/od6/public/values?alt=json'

console.log('running before ajax')
let projects = []
$.ajax({
    url: sheetAsJSON,
}).then((data)=> {
    console.log('data', data)
     projects = data.feed.entry.map( project => {
     return{
         title: project.gsx$title.$t,
         image: project.gsx$image.$t,
         description: project.gsx$description.$t,
         url: project.gsx$url.$t
        }
        })//map ends
        app(projects);

        console.log('projects', projects)
})
//.catch is mean to deal with errors
.catch( err => console.log('err', err))

console.log('running after ajax')

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

new kursor({
    type: 2

})

new kursor ({
    removeDefaultCursor: true
})

new kursor ({
    color: '#f8f800'
})



