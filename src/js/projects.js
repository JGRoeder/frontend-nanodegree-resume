var section = require('./section.js');
var helper = require('./helper.js');
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
    this.doAppend('#projects',  helper.HTMLprojectStart);
    this.doAppend('.entry-meta:last', this.doFormat(this.data.projects[0].title,  helper.HTMLprojectTitle));
    this.doAppend('.entry-meta:last', this.doFormat(this.doDates(this.data.projects[i].dates),  helper.HTMLprojectDates));
    this.doAppend('.project-entry:last', this.doFormat(this.data.projects[i].description,  helper.HTMLprojectDescription));
    this.doAppend('.project-entry:last',  helper.HTMLprojectImageStart);
    while ( imageIterator < this.data.projects[i].images.length ){
      this.doAppend('.project-gallery:last', this.doFormat('img/' + this.data.projects[i].images[imageIterator],  helper.HTMLprojectImage));
      imageIterator++;
    }
    imageIterator = 0;
    i++;
  }
};

module.exports = projects;
