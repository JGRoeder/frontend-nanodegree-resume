var section = require('./section.js');
var helper = require('./helper.js');
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
  this.doAppend('#header', this.doFormat(this.data.name,  helper.HTMLheaderName) + this.doFormat(this.data.role,  helper.HTMLheaderRole), true);
  this.doAppend('#footerContacts', this.doFormat(this.data.contacts.email,  helper.HTMLemail));
  this.doAppend('#footerContacts', this.doFormat(this.data.contacts.github,  helper.HTMLgithub));
  this.doAppend('#footerContacts', this.doFormat(this.data.contacts.twitter,  helper.HTMLtwitter));
  this.doAppend('#footerContacts', this.doFormat(this.data.contacts.linkedin,  helper.HTMLlinkedin));
  this.doAppend('#header', this.doFormat('img/' + this.data.biopic,  helper.HTMLbioPic), true);
};

module.exports = bio;
