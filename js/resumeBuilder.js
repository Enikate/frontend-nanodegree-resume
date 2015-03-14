function formatData(formatter, data){
    return formatter.replace("%data%", data);
}

function prependFormatted(formatter, data, place){
    place.prepend(formatData(formatter, data));
}

function appendFormatted(formatter, data, place){
    place.append(formatData(formatter, data));
}

var bio = {
    "name" : "John Doe",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "650-555-5555",
        "email" : "john@example.com",
        "github" : "johndoe",
        "twitter" : "@johndoe",
        "location" : "Warsaw, Poland"
    },
    "welcomeMessage" : "lorem ipsum dolor sit amet",
    "skills":[
        ".NET", "JQuery", "HTML", "CSS"
    ],
    "bioPic" : "images/fry.jpg",
    "display" : function() {
        appendFormatted(HTMLmobile, this.contacts.mobile, $(".flex-box"));
        appendFormatted(HTMLemail, this.contacts.email, $(".flex-box"));
        appendFormatted(HTMLgithub, this.contacts.github, $(".flex-box"));
        appendFormatted(HTMLtwitter, this.contacts.twitter, $(".flex-box"));
        appendFormatted(HTMLlocation, this.contacts.location, $(".flex-box"));

        appendFormatted(HTMLbioPic, this.bioPic, $("#header"));
        appendFormatted(HTMLwelcomeMsg, this.welcomeMessage, $("#header"));

        prependFormatted(HTMLheaderRole, this.role, $("#header"));
        prependFormatted(HTMLheaderName, this.name, $("#header"));

        if(this.skills.length > 0){
            $("#header").append(HTMLskillsStart);
            for(var skill in this.skills){
                appendFormatted(HTMLskills, this.skills[skill], $("#skills"));
            }
        }
    }
}

var work = {
    "jobs" : [
        {
            "employer" : "Company A",
            "title" : "Web developer",
            "dates" : "January 2008 - September 2012",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "location" : "Warsaw, Poland"
        },
        {
            "employer" : "Company B",
            "title" : "Web developer",
            "dates" : "September 2012 - ",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "location" : "Bergen, Norway"
        }
    ],
    "display" : function(){
        for( var job in this.jobs){
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formatData(HTMLworkEmployer, this.jobs[job].employer) + formatData(HTMLworkTitle, this.jobs[job].title));
            appendFormatted(HTMLworkLocation, this.jobs[job].location, $(".work-entry:last"));
            appendFormatted(HTMLworkDates, this.jobs[job].dates, $(".work-entry:last"));
            appendFormatted(HTMLworkDescription, this.jobs[job].description, $(".work-entry:last"));
        }
    }
}

var projects = {
    "projects" : [
        {
            "title" : "Project 1",
            "dates" : 2009,
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,
            "images" : [
                "https://placeimg.com/320/220/animals", "https://placeimg.com/320/220/tech"
            ]
        },
        {
            "title" : "Project 2",
            "dates" : 2007,
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,
            "images" : [
                "https://placeimg.com/320/220/nature", "https://placeimg.com/320/220/people"
            ]
        }
    ],
    "display" : function () {
        for( var project in this.projects){
            $("#projects").append(HTMLprojectStart);
            appendFormatted(HTMLprojectTitle, this.projects[project].title, $(".project-entry:last"));
            appendFormatted(HTMLprojectDates, this.projects[project].dates, $(".project-entry:last"));
            appendFormatted(HTMLprojectDescription, this.projects[project].description, $(".project-entry:last"));
            for(var image in this.projects[project].images){
                appendFormatted(HTMLprojectImage, this.projects[project].images[image], $(".project-entry:last"));
            }
        }
    }
}

var education = {
    "schools" : [
        {
            "name" : "School A",
            "location" : "Warsaw Poland",
            "degree" : "Masters",
            "majors" : ["CS, Art"],
            "dates" : 2010,
            "url" : "http://pjwstk.edu.pl"
        },
        {
            "name" : "School B",
            "location" : "Warsaw, Poland",
            "degree" : "BA",
            "majors" : ["CS"],
            "dates" : 2008,
            "url" : "http://pjwstk.edu.pl"
        }
    ],
    "onlineCourses": [
        {
            "title" : "JavaScript Crash Course",
            "school" : "Udacity",
            "dates" : 2015,
            "url" : "http://udacity.com"
        },
        {
            "title" : "Intro to Programing",
            "school" : "Udacity",
            "dates" : 2014,
            "url" : "http://udacity.com"
        }
    ],
    "display" : function() {
        for( var school in this.schools){
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formatData(HTMLschoolName, this.schools[school].name) + formatData(HTMLschoolDegree, this.schools[school].degree));
            appendFormatted(HTMLschoolDates, this.schools[school].dates, $(".education-entry:last"));
            appendFormatted(HTMLschoolLocation, this.schools[school].location, $(".education-entry:last"));
            appendFormatted(HTMLschoolMajor, this.schools[school].majors.join(", "), $(".education-entry:last"));
        }

        if(this.onlineCourses.length > 0){
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            for ( var course in this.onlineCourses){
                $(".education-entry:last").append(formatData(HTMLonlineTitle, this.onlineCourses[course].title) + formatData(HTMLonlineSchool, this.onlineCourses[course].school));
                appendFormatted(HTMLonlineDates, this.onlineCourses[course].dates, $(".education-entry:last"));
                appendFormatted(HTMLonlineURL, this.onlineCourses[course].url, $(".education-entry:last"));
            }
        }
    }
}

$(bio.display());
$(work.display());
$(projects.display());
$(education.display());
$("#mapDiv").append(googleMap);



