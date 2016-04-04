/*
This is empty on purpose! Your code to build the resume will go here.
 */
(function() {

    'use strict';

    var bio = {
        "name": "Ronald Yau",
        "role": "Front End Engineer",
        "contacts": {
            "mobile": "555-555-5555",
            "email": "me@email.com",
            "github": "https://github.com/ronaldyau",
            "twitter": "https://twitter.com/ronaldyau",
            "location": "New York City"
        },
        "welcomeMessage": "Hello!",
        "skills": ["HTML", "CSS", "JavaSctipt", "AngularJS", "Bootstrap", "Git", "C#. NET", "ASP.NET", "Python", "Google Analytics", "A/B Testing", "Optimizely"],
        "biopic": "https://pbs.twimg.com/profile_images/471008197843488768/GoxjU-wt.jpeg",
        "display": function() {
            $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
            $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
            $('#header').prepend(HTMLbioPic.replace('%data%', bio.biopic));
            for (var contact in bio.contacts) {
                if (bio.contacts.hasOwnProperty(contact)) {
                    var contactItem = HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', bio.contacts[contact]);
                    $('#topContacts').append(contactItem);
                }
            }
            $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
            $('#header').append(HTMLskillsStart);
            for (var skill in bio.skills) {
                if (bio.skills.hasOwnProperty(skill)) {
                    $('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]));
                }
            }
        }
    };

    var work = {
        jobs: [{
            "employer": "GrubHub / Seamless",
            "title": "Software Engineer",
            "location": "New York",
            "dates": "3/2015 - present",
            "description": "Front-end AngularJS developer"
        }, {
            "employer": "GrubHub / Seamless",
            "title": "Marketing Operations Manager - SEO and Conversion Products",
            "location": "New York",
            "dates": "10/2012 - 3/2015",
            "description": " Performed day-to-day management of SEO operations and projects"
        }, {
            "employer": "GrubHub / Seamless",
            "title": "Marketing Operations Manager - Conversion Products",
            "location": "New York",
            "dates": "7/2011 - 10/2012",
            "description": "ASP.NET developer focusing on building and optimizing products that contribute to driving or"
        }],
        "display": function() {
            for (var i = 0; i < work.jobs.length; i++) {
                $('#workExperience').append(HTMLworkStart);
                var workEntry = $('.work-entry:last');
                workEntry.append(HTMLworkEmployer.replace('%data%', work.jobs[i].employer));
                workEntry.append(HTMLworkTitle.replace('%data%', work.jobs[i].title));
                workEntry.append(HTMLworkDates.replace('%data%', work.jobs[i].location));
                workEntry.append(HTMLworkLocation.replace('%data%', work.jobs[i].dates));
                workEntry.append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
            }
        }
    };

    var projects = {
        "projects": [{
            "title": "Sample project",
            "dates": "2015",
            "description": "Sample project description",
            "images": ["images/197X148.gif"]
        }],
        "display": function() {
            for (var i = 0; i < projects.projects.length; i++) {
                $('#projects').append(HTMLprojectStart);
                var projectEntry = $('.project-entry:last');
                projectEntry.append(HTMLprojectTitle.replace('%data%', projects.projects[i].title));
                projectEntry.append(HTMLprojectDates.replace('%data%', projects.projects[i].dates));
                projectEntry.append(HTMLprojectDescription.replace('%data%', projects.projects[i].description));
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    projectEntry.append(HTMLprojectImage.replace('%data%', projects.projects[i].images[j]));
                }
            }
        }
    };

    var education = {
        "schools": [{
            "name": "Stony Brook University",
            "location": "Stony Brook, NY",
            "degree": "Bachelor of Science",
            "majors": ["Information Systems", "Business Administration"],
            "dates": 2003,
            "url": "http://www.stonybrook.edu/"
        }],
        "onlineCourses": [{
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "date": 2016,
            "url": "https://www.udacity.com/nanodegrees/nd001"
        }],
        "display": function() {
            for (var i = 0; i < education.schools.length; i++) {
                $('#education').append(HTMLschoolStart);
                var educationEntry = $('.education-entry:last');
                educationEntry.append(HTMLschoolName.replace('%data%', education.schools[i].name));
                educationEntry.append(HTMLschoolDegree.replace('%data%', education.schools[i].degree));
                educationEntry.append(HTMLschoolDates.replace('%data%', education.schools[i].dates));
                educationEntry.append(HTMLschoolLocation.replace('%data%', education.schools[i].location));
                educationEntry.append(HTMLschoolMajor.replace('%data%', education.schools[i].majors));
            }

            $('#education').append(HTMLonlineClasses);
            for (var j = 0; j < education.onlineCourses.length; j++) {
                $('#education').append(HTMLschoolStart);
                var onlineCourse = $('.education-entry:last');
                onlineCourse.append(HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title));
                onlineCourse.append(HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school));
                onlineCourse.append(HTMLonlineDates.replace('%data%', education.onlineCourses[i].date));
                onlineCourse.append(HTMLonlineURL.replace('%data%', education.onlineCourses[i].url));
            }
        }
    };

    bio.display();
    work.display();
    projects.display();
    education.display();

    $('#mapDiv').append(googleMap);
})();