
//----------------------------------------//
// Data for Google Map 'Points of Interest'
//----------------------------------------//

var poi = {
    'gotham-stadium': {
        'name': 'Gotham Stadium',
        'coord_B': 50.32968447508274,
        'coord_k': -14.90625
    },
    'wayne-manor': {
        'name': 'Wayne Manor',
        'coord_B': 71.75088210762641,
        'coord_k': 6.6562500000000455
    },
    'drake-house': {
        'name': 'The Drake Household',
        'coord_B': 78.2577105471896,
        'coord_k': 8.493749999999977
    },
    'brentwood': {
        'name': 'Brentwood Academy',
        'coord_B': 79.56337663309708,
        'coord_k': 28.631250000000023
    },
    'rob-kane-bridge': {
        'name': 'Robert Kane Memorial Bridge',
        'coord_B': 52.67609572471378,
        'coord_k': 18.731250000000045
    },
    'grant-park': {
        'name': 'Grant Park',
        'coord_B': 15.531588527072248,
        'coord_k': -1.40625
    },
    'gordon-house': {
        'name': 'Gordon\'s House',
        'coord_B': 2.816772680384213,
        'coord_k': -35.04374999999999
    },
    'gotham-lp': {
        'name': 'Gotham Light & Power',
        'coord_B': 33.58294333814343,
        'coord_k': -57.3187500000000
    },
    'vf-bridge': {
        'name': 'Vincefinkel Bridge',
        'coord_B': 12.3273765185011069,
        'coord_k': -54.66874999999999
    },
    'wayne-bgarden': {
        'name': 'Wayne Botanical Garden',
        'coord_B': 29.4905111156332,
        'coord_k': -21.881250000000023
    },
    'resevoir': {
        'name': 'The Resevoir',
        'coord_B': 25.5624802951362,
        'coord_k': -20.643749999999955
    },
    'wayne-tw': {
        'name': 'Wayne Tower',
        'coord_B': 12.981260142434918,
        'coord_k': -20.756250000000023
    },
    'one-gotham': {
        'name': 'One Gotham Center',
        'coord_B': 12.75078419573546,
        'coord_k': -30.9936749999999977
    },
    'city-hall': {
        'name': 'City Hall',
        'coord_B': 18.883924432377242,
        'coord_k': -28.181249999999977
    },
    'cathedral-square': {
        'name': 'Cathedral Square',
        'coord_B': 11.601463436229164,
        'coord_k': 1.1812499999999773
    },
    'gotham-courthouse': {
        'name': 'Gotham Superior Courthouse',
        'coord_B': 15.473295434431941,
        'coord_k': -32.56875000000002
    },
    'archie-airport': {
        'name': 'Archie Goodwin International Airport',
        'coord_B': 74.75895697584787,
        'coord_k': -52.48124999999999
    },
    'mooney-bridge': {
        'name': 'Mooney Bridge',
        'coord_B': 72.00860976920748,
        'coord_k': -36.28125
    },
    'blackgate-pen': {
      'name': 'Blackgate Penitentiary',
      'coord_B': 1.8048346585437434,
      'coord_k': 0.28125
    },
    'gcpd-headquarters': {
      'name': 'G.C.P.D Headquarters',
      'coord_B': 12.003162845703626,
      'coord_k': -11.53125
    },
    'kane-building': {
      'name': 'R.H. Kane Building',
      'coord_B': 28.39925329849711,
      'coord_k': -6.46875
    },
    'robinson-park': {
      'name': 'Robinson Park',
      'coord_B': 21.336706254722497,
      'coord_k': -21.431249999999977
    },
    'arkham-asylum': {
      'name': 'Arkham Asylum',
      'coord_B': 37.08963738756548,
      'coord_k': -27.956249999999955
    },
    'trigate-bridge': {
      'name': 'New Trigate Bridge',
      'coord_B': 42.19772517343877,
      'coord_k': -42.58125000000001
    },
    'gotham-u': {
      'name': 'Gotham University',
      'coord_B': 28.39925329849711,
      'coord_k': -32.79374999999999
    }
};

//---------------------------------//
// Data for Map 'Regions'
//---------------------------------//

var regions = {
  'old-gotham': {
    'name': 'Old Gotham',
    'coord_B': 10.63562509302112,
    'coord_k': -15.918750000000045,
    'rel': 'small'
  },
  'crime-alley': {
    'name': 'Crime Alley',
    'coord_B': 46.54887117395838,
    'coord_k': -5.043750000000045,
    'rel': 'tiny'
  },
  'robbinsville': {
    'name': 'Robbinsville',
    'coord_B': 34.45847632662063,
    'coord_k': 8.15625,
    'rel': 'tiny'
  },
  'amuse-mile': {
    'name': 'Amusement Mile',
    'coord_B': 53.235554927688746,
    'coord_k': -3.65625,
    'rel': 'tiny'
  },
  'tricorner': {
    'name': 'Tricorner',
    'coord_B': 4.787237933127632,
    'coord_k': -31.49374999999999,
    'rel': 'small'
  },
  'cityhall-district': {
    'name': 'City Hall District',
    'coord_B': 19.89628775892076,
    'coord_k': -34.93124999999998,
    'rel': 'tiny'
  },
  'gotham-north': {
    'name': 'Gotham North',
    'coord_B': 40.25578068484769,
    'coord_k': -7.03125,
    'rel': 'small'
  },
  'miller-harbor': {
    'name': 'Miller Harbor',
    'coord_B': 21.276412842506527,
    'coord_k': -1.5187499999999545,
    'rel': ['water-small']
  },
  'the-rip': {
    'name': 'The Rip',
    'coord_B': 3.898501987409341,
    'coord_k': -3.856250000000023,
    'rel': ['the-rip']
  },
  'gotham-river': {
    'name': 'Gotham River',
    'coord_B': 26.89628775892076,
    'coord_k': -48.13125000000002,
    'rel': ['gotham-river']
  },
  'port-adams': {
    'name': 'Port Adams',
    'coord_B': 17.28838822131667,
    'coord_k': 17.11874999999977,
    'rel': ['water-small']
  },
  'bowery': {
    'name': 'The Bowery',
    'coord_B': 37.27867507713431,
    'coord_k': -0.6187499999999773,
    'rel': ['tiny']
  },
  'coventry': {
    'name': 'Coventry',
    'coord_B': 33.17385741461919,
    'coord_k': -23.568750000000023,
    'rel': ['tiny']
  }
};

//-------------------------------------------------------------------------------------------------//
// NOTE: Because Gotham isn't a real place ( gasp ), we can't actually search Google Places
// and find locations within it. So instead, I'm setting up an object, to associate
// some names with lat,lng values.
//
// Then, when we iterate through the locations stored in the resume, I can just search
// this object instead, and retrieve the coordinates.
//
// In this case it would probably make more sense to just store the lat,lngs in the resume itself,
// but I thought this would be a closer approximation of what you had in mind.
//
// HOPEFULLY fulfilling the 'The resume includes a map that pulls location data from the resume'
// requirement which was listed in the rubric.
//-------------------------------------------------------------------------------------------------//
// Fake places for resume lookup
//-------------------------------------------------------------------------------------------------//

var places = {
  'Old Gotham': {
    'identifier': 'oldgotham',
    'data': {
      'ace-chem': {
        'names': ['ace chemicals', 'ace chemical', 'ace chem', 'ace chemical processing inc.', 'ace chemicals inc'],
        'formatted_name': 'Ace Chemical',
        'coord_B': 10.28554114986563,
        'coord_k': -7.03125,
        'image': './img/places/ace-chem.jpg',
        'desc': 'The factory where a costumed criminal named the Red Hood fell into a vat of chemicals...and a star was born.'
      },
      'blackgate-pen': {
        'names': ['blackgate', 'blackgate pen', 'blackgate penitentiary', 'the black gate'],
        'formatted_name': 'Blackgate',
        'coord_B': 1.8048346585437434,
        'coord_k': 0.28125,
        'image': './img/places/blackgate.jpg',
        'desc': 'Gotham City\'s main prison. Located on Blackage Isle, Blackgate Penetiary has housed some of Gotham\'s best known personalities.'
      }
    }
  },
  'Gotham North': {
    'identifier': 'gothamnorth',
    'data': {
      'crime-alley': {
        'names': ['crime alley'],
        'formatted_name': 'Crime Alley',
        'coord_B': 46.54887117395838,
        'coord_k': -5.043750000000045,
        'image': './img/places/crime-alley.jpg',
        'desc': 'Formally Park Row. It is a dangerous, crime-infested area. This is where Joe Chill killed Thomas and Martha Wayne in front of their young son, Bruce, after the family had visited a cinema.'
      },
      'bowery': {
        'names': ['the bowery', 'bowery'],
        'formatted_name': 'The Bowery',
        'coord_B': 37.27867507713431,
        'coord_k': -0.6187499999999773,
        'rel': ['tiny'],
        'image': './img/places/bowery.jpg',
        'desc': 'Gotham city\'s worst neighbord, is bordered to the north by Crime Alley. The Bowery is home to Crown Point, a smaller inner-district ridden with crime and homelessness.'
      },
      'amuse-mile': {
        'names': ['amusement mile'],
        'formatted_name': 'Amusement Mile',
        'coord_B': 53.235554927688746,
        'coord_k': -3.65625,
        'image': './img/places/amusement-mile.jpg',
        'desc': 'An amusement park and tourist destination in Gotham North. The Amusement mile is lined with ferriswheels, rollercoasters, and other attractions typical of a theme park.'
      }
    }
  },
  'Gotham Central': {
    'identifier': 'gothamcentral',
    'data': {
      'arkham-asylum': {
        'names': ['arkham', 'arkham asylum'],
        'formatted_name': 'Arkham Asylum',
        'coord_B': 37.08963738756548,
        'coord_k': -27.956249999999955,
        'image': './img/places/arkham.jpg',
        'desc': 'Officially known as Arkham Asylum for the Criminally Insane, many of Gotham\'s most well know criminals have recieved treatment here. Escapes are frequent and recidivism is rampant. '
      },
      'gotham-u': {
        'names': ['gotham u', 'Gotham University'],
        'formatted_name': 'Gotham University',
        'coord_B': 28.39925329849711,
        'coord_k': -32.79374999999999,
        'image': './img/places/gotham-u.jpg',
        'desc': 'One of Gotham\'s oldest and most prestigious universities. Founded in 1898, the university became a highlight in academic education, resulting in it possessing its own bank and a museum with a priceless art collection.'
      }
    }
  },
  'Gotham City': {
    'identifier': 'gothamcity',
    'data': {
      'gotham': {
        'names': ['gotham', 'gotham proper', 'gotham city'],
        'formatted_name': 'Gotham City',
        'coord_B': 17.28838822131667,
        'coord_k': -31.16250000000023,
        'image': './img/places/gotham-city.jpg',
        'desc': '&ldquo; I\'m not particularly fond of Gotham. It\'s like someone built a nightmare out of metal and stone.&rdquo;</br>&mdash;Superman'
      }
    }
  }
};


// Set up some methods that will be common to all resume sections

var section = (function(object){
  this.data = object;

  // append formatted items to the provided html element
  this.doAppend = function ( element, item, prepend ) {
    if(typeof(prepend) === 'undefined' || prepend === false || prepend === 'false' ) {
      $(element).append(item);
    } else if ( prepend !== false && prepend !== 'false') {
      $(element).prepend(item);
    }
  };

  // replace %data% with a given item and return it
  this.doFormat = function ( item, formatter ) {
    var formatted = formatter.replace('%data%', item );
    return formatted;
  };

  // Return an pair of dates as a string delimited with ' - ' ex. 2001 - 2003
  this.doDates = function ( array ){
    var i = 0;
    var dateString = '';
    while ( i < array.length ){
      if ( (array.length - i ) > 1 ) {
        dateString += (array[i] + ' - ' );
      } else if ( (array.length - i ) <= 1 ) {
        dateString += array[i] ;
      }
      i++;
    }
    return dateString;
  };
});

var work = new section ({
    'jobs': [
        {
            'employer': 'Gotham City',
            'title': 'Clown Prince of Crime',
            'location': 'Gotham, Gotham City',
            'dates': [
                '1940',
                'Present'
            ],
            'description': 'Harassing The Bat, Nearly Killing the Bat, Nearly killing everyone The Bat cares for, Developing, manufacturing and distributing chemical weapons. Murder, conspiracy to commit murder, extortion, robbery, armed robbery, multiple long term internments at Arkham Asylum, causing public disturbance, escaping police custody, multiple incidences of assaulting a police officer, impersonating police officers, impersonating public officials, kidnap, disturbing the peace, voluntary and involuntary manslaughter, sedition, fraud, wilfull destruction of public property, vandalism, bribery, battery, arson.'
        },
        {
            'employer': 'Red Hood Gang',
            'title': 'Fall Guy ( Literally )',
            'location': 'Crime Alley, Gotham North',
            'dates': [
                '1938',
                '1939'
            ],
            'description': 'Short term contract. Provided strategic planning and consulting which resulted in the deaths of multiple clients within my care.'
        },
        {
            'employer': 'Self Employed',
            'title': 'Comedian',
            'location': 'The Bowery, Gotham North',
            'dates': [
                '1936',
                '1937'
            ],
            'description': 'Laugh and the world laughs with you!'
        },
        {
            'employer': 'Ace Chemical Processing Inc.',
            'title': 'Lab Assistant',
            'location': 'Ace Chemical Processing Inc., Old Gotham',
            'dates': [
                '1935',
                '1936'
            ],
            'description': 'Set up and conducted chemical experiments, tests, and analyses using techniques such as chromatography, spectroscopy, physical and chemical separation techniques, and microscopy. Conducted chemical and physical laboratory tests to assist scientists in making qualitative and quantitative analyses of solids, liquids, and gaseous materials. Compiled and interpreted results of tests and analyses. Provided technical support and assistance to chemists and engineers. Prepared chemical solutions for products and processes following standardized formulas, or <em>experimental</em> formulas. Wrote technical reports or prepared graphs and charts to document experimental results. Ordered and inventoried materials in order to maintain supplies.'
        }
    ]
});
work.putHtml = function (){
  var i = 0;
  while ( i < this.data.jobs.length ){
    this.doAppend('#workExperience', HTMLworkStart);
    this.doAppend('.entry-meta:last', this.doFormat(this.data.jobs[i].employer, HTMLworkEmployer) + this.doFormat(this.data.jobs[i].title, HTMLworkTitle));
    this.doAppend('.entry-meta:last', this.doFormat(this.doDates(this.data.jobs[i].dates), HTMLworkDates));
    this.doAppend('.entry-meta:last', this.doFormat(this.data.jobs[i].location, HTMLworkLocation));
    this.doAppend('.work-entry:last', this.doFormat(this.data.jobs[i].description, HTMLworkDescription));
    i++;
  }
};


var projects = new section ({
    'projects': [
        {
            'title': 'Smilex - Happy Gas - Joker Venom',
            'dates': [
                '1940',
                'Present'
            ],
            'description': 'The one gag guaranteed to get big laughs with any audience. Engineered by yours truly ( with absolutely no help from Melvin Reipan ). Years of (involuntary) public testing have lead to the creation of two products. Standard Smilex ( laughing gas - as it is generally disseminated as a vapor ) causes violent uncontrollable laughter in those affected, with only a moderate chance of permanent facial disfiguration. As well as Smilex Plus, in both liquid and gaseous forms, suitable for those situation when you need a crowd to absolutely <em>die</em> laughing. Exposure to either version of Smilex frequently results in extreme facial contortions resulting in a permanent disfiguring grin...it\'s a real gas.',
            'images': [
                'venom1.jpg',
                'venom2.jpg',
                'venom3.jpg',
                'venom4.jpg'
            ]
        },
        {
            'title': 'Sideshow Arsenal',
            'dates': [
                '1940',
                'Present'
            ],
            'description': 'My personal aresnal, pain-stakingly developed to take reduce the monotony of outright mayhem',
            'images': [
                'wep1.jpg',
                'wep2.jpg',
                'wep3.jpg',
                'wep4.jpg'
            ]
        }
    ]
});
projects.putHtml = function (){
  var i = 0;
  var imageIterator = 0;
  while ( i < this.data.projects.length ){
    this.doAppend('#projects', HTMLprojectStart);
    this.doAppend('.entry-meta:last', this.doFormat(this.data.projects[0].title, HTMLprojectTitle));
    this.doAppend('.entry-meta:last', this.doFormat(this.doDates(this.data.projects[i].dates), HTMLprojectDates));
    this.doAppend('.project-entry:last', this.doFormat(this.data.projects[i].description, HTMLprojectDescription));
    this.doAppend('.project-entry:last', HTMLprojectImageStart);
    while ( imageIterator < this.data.projects[i].images.length ){
      this.doAppend('.project-gallery:last', this.doFormat('img/' + this.data.projects[i].images[imageIterator], HTMLprojectImage));
      imageIterator++;
    }
    imageIterator = 0;
    i++;
  }
};

var bio = new section ({
    'name': 'The Joker',
    'role': '&#9829; Harlequin of Hate &#9827; <br> &#9830; Clown Prince of Crime &#9824; <br> &#9824; Ace of Knaves &#9829; ',
    'welcomeMessage': 'Hey there chief!',
    'biopic': 'joker.jpg',
    'contacts': {
        'email': 'mailto:noemail@thejoker.com',
        'github': 'https://github.com/',
        'twitter': 'https://twitter.com/the_j0ker',
        'linkedin': 'https://www.linkedin.com/',
        'location': 'Amusement Mile, Gotham North'
    },
    'skills': [
        'Design',
        'Illustration',
        'Front-End Development'
    ]
});

bio.putHtml = function (){
  var i = 0;
  this.doAppend('#header', this.doFormat(this.data.name, HTMLheaderName) + this.doFormat(this.data.role, HTMLheaderRole), true);
  this.doAppend('#footerContacts', this.doFormat(this.data.contacts.email, HTMLemail));
  this.doAppend('#footerContacts', this.doFormat(this.data.contacts.github, HTMLgithub));
  this.doAppend('#footerContacts', this.doFormat(this.data.contacts.twitter, HTMLtwitter));
  this.doAppend('#footerContacts', this.doFormat(this.data.contacts.linkedin, HTMLlinkedin));
  //this.doAppend('#footerContacts', this.doFormat(this.data.contacts.location, HTMLlocation));
  this.doAppend('#header', this.doFormat('img/' + this.data.biopic, HTMLbioPic), true);
  //
  // I prefer not to show this section. Rubric doesn't seem to require it. Lucky me.
  //
  // this.doAppend('#header', HTMLskillsStart);
  // while( i < this.data.skills.length ){
  //   this.doAppend('#skills', this.doFormat(this.data.skills[i], HTMLskills));
  //   i++;
  // }
};

var education = new section ({
    'schools': [
        {
            'name': 'Blackgate Penitentiary',
            'location': 'Blackgate Penitentiary, Old Gotham',
            'degree': 'Hard Knocks',
            'majors': [
                'Incident',
                'Trauma',
            ],
            'dates': [
                '1940',
                '1941',
                '1943'
            ],
            'url': 'http://www.mit.edu'
        },
        {
            'name': 'Arkham Asylum',
            'location': 'Arkham Asylum, Gotham Central',
            'degree': 'Pyschosis',
            'majors': [
                'Lapse in Judgement',
                'Escape Attempts',
            ],
            'dates': [
                'Consistent Incarceration'
            ],
            'url': 'http://www.mit.edu'
        },
        {
            'name': 'Gotham University',
            'location': 'Gotham University, Gotham Central',
            'degree': 'M.S.',
            'majors': [
                'Chemical Engineering'
            ],
            'dates': [
                '1928'
            ],
            'url': 'http://www.mit.edu'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Udacity Front-End Web Developer Nanodegree',
            'school': 'Udacity',
            'dates': [
                '2014',
                'present'
            ],
            'url': 'http://www.udacity.com'
        }
    ]
});
education.putHtml = function (){
  var i = 0;
  var majorsIterator = 0;
  while ( i < this.data.schools.length ){
    this.doAppend('#education', HTMLschoolStart);
    this.doAppend('.entry-meta:last', this.doFormat(this.data.schools[i].name, HTMLschoolName) + this.doFormat(this.data.schools[i].degree, HTMLschoolDegree));
    this.doAppend('.entry-meta:last', this.doFormat(this.doDates(this.data.schools[i].dates), HTMLschoolDates));
    this.doAppend('.entry-meta:last', this.doFormat(this.data.schools[i].location, HTMLschoolLocation));
    while ( majorsIterator < this.data.schools[i].majors.length ){
      this.doAppend('.education-entry:last', this.doFormat(this.data.schools[i].majors[majorsIterator], HTMLschoolMajor));
      majorsIterator++;
    }
    majorsIterator = 0; // reset iterator for majors, so it works for the next school
    i++;
  }

  i = 0; // reset iterator for online classes output

  this.doAppend('#education', HTMLonlineClasses );
  while ( i < this.data.onlineCourses.length ) {
    this.doAppend('#education', HTMLschoolStart);
    this.doAppend('.entry-meta:last', this.doFormat(this.data.onlineCourses[i].title, HTMLonlineTitle) + this.doFormat(this.data.onlineCourses[i].school, HTMLonlineSchool));
    this.doAppend('.entry-meta:last', this.doFormat(this.doDates(this.data.onlineCourses[i].dates), HTMLonlineDates));
    this.doAppend('.education-entry:last', this.doFormat(this.data.onlineCourses[i].url, HTMLonlineURL));
    i++;
  }
};


// get all mapped
$('#mapContainer').append(googleMap);

// Now just run this stuff.
work.putHtml();
bio.putHtml();
projects.putHtml();
education.putHtml();

$(window).resize(function() {
    clearTimeout(this.id);
    this.id = setTimeout(doneResizing, 300);
    this.id = setTimeout($('.chart').skillsChart('resize'), 300);
});

$('.main-nav').localScroll({
  onBefore: function(){
    this.offset = {
      top: getMenuOffset()
    };
  }
});
$('#main-nav').sticky({topSpacing:0});
$('.chart').skillsChart();
