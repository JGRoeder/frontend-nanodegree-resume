var section = require('./section.js');
var helper = require('./helper.js');
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
    this.doAppend('#education',  helper.HTMLschoolStart);
    this.doAppend('.entry-meta:last', this.doFormat(this.data.schools[i].name,  helper.HTMLschoolName) + this.doFormat(this.data.schools[i].degree,  helper.HTMLschoolDegree));
    this.doAppend('.entry-meta:last', this.doFormat(this.doDates(this.data.schools[i].dates),  helper.HTMLschoolDates));
    this.doAppend('.entry-meta:last', this.doFormat(this.data.schools[i].location,  helper.HTMLschoolLocation));
    while ( majorsIterator < this.data.schools[i].majors.length ){
      this.doAppend('.education-entry:last', this.doFormat(this.data.schools[i].majors[majorsIterator],  helper.HTMLschoolMajor));
      majorsIterator++;
    }
    majorsIterator = 0; // reset iterator for majors, so it works for the next school
    i++;
  }

  i = 0; // reset iterator for online classes output

  this.doAppend('#education',  helper.HTMLonlineClasses );
  while ( i < this.data.onlineCourses.length ) {
    this.doAppend('#education',  helper.HTMLschoolStart);
    this.doAppend('.entry-meta:last', this.doFormat(this.data.onlineCourses[i].title,  helper.HTMLonlineTitle) + this.doFormat(this.data.onlineCourses[i].school,  helper.HTMLonlineSchool));
    this.doAppend('.entry-meta:last', this.doFormat(this.doDates(this.data.onlineCourses[i].dates),  helper.HTMLonlineDates));
    this.doAppend('.education-entry:last', this.doFormat(this.data.onlineCourses[i].url,  helper.HTMLonlineURL));
    i++;
  }
};

module.exports = education;
