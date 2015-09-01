module.exports = {
  HTMLheaderName: "<h1 id='name'>%data%</h1>",
  HTMLheaderRole: "<span class='roles'>%data%</span>",

  HTMLcontactGeneric: "<li class='contact-item'><a href='#'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></a></li>",
  HTMLmobile: "<li class='contact-item'><a href='#'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>",
  HTMLemail: "<li class='contact-item'><a href='%data%'><svg class='icon email-icon' width='24' height='24'><use xlink:href='#icon-email'></svg><span class='white-text'>Email</span></li>",
  HTMLtwitter: "<li class='contact-item'><a href='%data%' target='_blank'><svg class='icon twitter-icon' width='24' height='24'><use xlink:href='#icon-twitter'></svg><span class='white-text'>Twitter</span></li>",
  HTMLgithub: "<li class='contact-item'><a href='%data%' target='_blank'><svg class='icon github-icon' width='24' height='24'><use xlink:href='#icon-github'></svg><span class='white-text'>Github</span></li>",
  HTMLlinkedin: "<li class='contact-item'><a href='%data%' target='_blank'><svg class='icon linkedin-icon' width='24' height='24'><use xlink:href='#icon-linkedin'></svg><span class='white-text'>LinkedIn</span></a></li>", // added
  HTMLblog: "<li class='contact-item'><a href='#'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></a></li>",
  HTMLlocation: "<li class='contact-item'><a href='#'><span class='orange-text'>location</span><span class='white-text'>%data%</span></a></li>",

  HTMLbioPic: "<img src='%data%' class='biopic'>",
  HTMLWelcomeMsg: "<span class='welcome-message'>%data%</span>",

  HTMLskillsStart: "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>",
  HTMLskills: "<li class='flex-item'><span class='white-text'>%data%</span></li>",

  HTMLworkStart: "<div class='work-entry entry'><div class='entry-meta'></div></div>",
  HTMLworkEmployer: "<a href='#' class='item-title'>%data%",
  HTMLworkTitle: " - %data%</a>",
  HTMLworkDates: "<div class='date-text'>%data%</div>",
  HTMLworkLocation: "<div class='location-text'>%data%</div>",
  HTMLworkDescription: "<div class='description-head'>Responsibilities:</div><p>%data%</p>",

  HTMLprojectStart: "<div class='project-entry entry'><div class='entry-meta'></div></div>",
  HTMLprojectTitle: "<a href='#' class='item-title'>%data%</a>",
  HTMLprojectDates: "<div class='date-text'>%data%</div>",
  HTMLprojectDescription: "<p>%data%</p>",
  HTMLprojectImageStart: "<div class='project-gallery'></div>",
  HTMLprojectImage: "<div class='image-container'><img src='%data%'></div>",

  HTMLschoolStart: "<div class='education-entry entry'><div class='entry-meta'></div></div>",
  HTMLschoolName: "<a href='#' class='item-title'>%data%",
  HTMLschoolDegree: " -- %data%</a>",
  HTMLschoolDates: "<div class='date-text'>%data%</div>",
  HTMLschoolLocation: "<div class='location-text'>%data%</div>",
  HTMLschoolMajor: "<em><br>Major: %data%</em>",

  HTMLonlineClasses: "<h3>Online Classes</h3>",
  HTMLonlineTitle: "<a href='#' class='item-title'>%data%",
  HTMLonlineSchool: " - %data%</a>",
  HTMLonlineDates: "<div class='date-text'>%data%</div>",
  HTMLonlineURL: "<br><a href='#'>%data%</a>",

  internationalizeButton: "<button>Internationalize</button>",
  googleMap: "<span class='map-watermark'>Gotham City</span><div id='map'></div>"
};
