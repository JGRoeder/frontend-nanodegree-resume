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

module.exports = places;
