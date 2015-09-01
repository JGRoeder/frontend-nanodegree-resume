var section = require('./section.js');
var helper = require('./helper.js');
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
    this.doAppend('#workExperience', helper.HTMLworkStart);
    this.doAppend('.entry-meta:last', this.doFormat(this.data.jobs[i].employer,  helper.HTMLworkEmployer) + this.doFormat(this.data.jobs[i].title,  helper.HTMLworkTitle));
    this.doAppend('.entry-meta:last', this.doFormat(this.doDates(this.data.jobs[i].dates),  helper.HTMLworkDates));
    this.doAppend('.entry-meta:last', this.doFormat(this.data.jobs[i].location,  helper.HTMLworkLocation));
    this.doAppend('.work-entry:last', this.doFormat(this.data.jobs[i].description,  helper.HTMLworkDescription));
    i++;
  }
};

module.exports = work;
