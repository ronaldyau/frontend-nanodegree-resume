/*
This is empty on purpose! Your code to build the resume will go here.
 */
'use strict';

var bio = {
    "name" : "Ronald Yau",
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
    "display": function () {}
};

$('#header').prepend(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
$('#header').prepend(HTMLbioPic.replace('%data%', bio.biopic));

for (var contact in bio.contacts) {
    var contactItem = HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', bio.contacts[contact]);
    $('#topContacts').append(contactItem);
}

