/* Get 'home' page */
module.exports.homelist = function(req, res) {
	res.render('locations-list', {
		title: 'Loc8r - find a place to work with wifi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find places to work with wifi near you!'
		},
		sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		},{
			name: 'Cafe Hero',
			address: '125 High Street, Reading, RG6',
			rating: 4,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '200m'
		},{
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6',
			rating: 2,
			facilities: ['Food', 'Premium wifi'],
			distance: '250m'
		}]
	});
};

/* Get 'Location info' page */
module.exports.locationInfo = function(req, res){
	res.render('location-info', {
		title: 'Starcups',
		pageHeader: {
			title: 'Starcups'
		},
		sidebar: {
			context:'is on Loc8r because it has accessible wifi and space to sit down with you laptop and get some work done.',
			callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you'
		},
		location: {
			name:'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			coords: {
				lat: 51.455041,
				lng: -0.9690884
			},
			openingTimes: [{
				days: 'Monday-Friday',
				opening: '7:00am',
				closing: '7:00pm',
				closed: false
			}, {
				days: 'Saturday',
				opening: '8:00am',
				closing: '5:00pm',
				closed: false
			}, {
				days: 'Sunday',
				closed: true
			
			}],
			reviews: [{
				author: 'Wilbert Bean',
				rating: 5,
				timestamp: '23 October 2016',
				reviewText: 'What a great place. I can\'t say enough good things about it.'
			}, {
				author: 'Charles Chaplin',
				rating: 3,
				timestamp: '23 October 2016',
				reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
			}]
		}
	});
};

/* Get 'Add review' page */
module.exports.addReview = function(req, res){
	res.render('location-review-form', { 
		title: 'Review Starcups on Loc8r',
		pageHeader: {title: 'Review Starcups'}
	});
};