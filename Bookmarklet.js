(function() {

	alert('test');
// 	const currentDate = new Date();
// 
// 	class PlaceAndTime {
// 		
// 		constructor(place, time) {
// 			
// 			this._place = place;
// 			this._time = time;
// 		}
// 		
// 		get place() {
// 			
// 			return this._place;
// 		}
// 		
// 		get time() {
// 			
// 			return this._time;
// 		}
// 	}
// 	
// 	class ShinkansenName {
// 		
// 		constructor(label, carType) {
// 
// 			this._label = label;
// 			this._carType = carType;
// 		}
// 		
// 		get label() {
// 			
// 			return this._label;
// 		}
// 		
// 		get carType() {
// 			
// 			return this._carType;
// 		}
// 	}
// 	
// 	class ShinkansenInformation {
// 		
// 		constructor(shinkansenName, seatType, seatNumber, departurePlaceAndTime, arrivalPlaceAndTime) {
// 			
// 			this._shinkansenName = shinkansenName;
// 			this._seatType = seatType;
// 			this._seatNumber = seatNumber;
// 			this._departurePlaceAndTime = departurePlaceAndTime;
// 			this._arrivalPlaceAndTime = arrivalPlaceAndTime;
// 		}
// 		
// 		get shinkansenName() {
// 			
// 			return this._shinkansenName;
// 		}
// 		
// 		get seatType() {
// 			
// 			return this._seatType;
// 		}
// 		
// 		get departurePlaceAndTime() {
// 			
// 			return this._departurePlaceAndTime;
// 		}
// 		
// 		get arrivalPlaceAndTime() {
// 			
// 			return this._arrivalPlaceAndTime;
// 		}
// 	}
// 	
// 	class ReservationDescription {
// 		
// 		constructor(shinkansenInformation, date, description) {
// 			
// 			this._shinkansenInformation = shinkansenInformation;
// 			this._date = date;
// 			this._description = description;
// 		}
// 		
// 		get date() {
// 			
// 			return this._date;
// 		}
// 		
// 		get shinkansenInformation() {
// 			
// 			return this._shinkansenInformation;
// 		}
// 
// 		get description() {
// 			
// 			return this._description;
// 		}		
// 	}
// 	
// 	function getInnerTextByFirstElementOfTagName(node, name) {
// 		
// 		const targetNode = node.getElementsByTagName(name)[0];
// 		const innerText = targetNode.innerText;
// 		
// 		return innerText;
// 	}
// 
// 	function getMainContentsSectionNode() {
// 		
// 		const sectionNodes = mainNode.getElementsByTagName('section');
// 		
// 		for (let i = 0; i != sectionNodes.length; ++i) {
// 			
// 			const sectionNode = sectionNodes[i];
// 			
// 			if (sectionNode.className === 'main-contents') {
// 				
// 				return sectionNode;
// 			}
// 			
// 			return null;
// 		}
// 	}
// 
// 	function getSubContentsSectionNode() {
// 		
// 		const sectionNodes = mainNode.getElementsByTagName('section');
// 		
// 		for (let i = 0; i != sectionNodes.length; ++i) {
// 			
// 			const sectionNode = sectionNodes[i];
// 			
// 			if (sectionNode.className === 'sub-contents') {
// 				
// 				return sectionNode;
// 			}
// 			
// 			return null;
// 		}
// 	}
// 	
// 	function getShinkansenInformation() {
// 		
// 		const contentsSectionNode = getSubContentsSectionNode();
// 		
// 		function getDefinitionListTagByClassName(className) {
// 		
// 			const dlNodes = contentsSectionNode.getElementsByTagName('dl');
// 			
// 			for (let i = 0; i != dlNodes.length; ++i) {
// 				
// 				const dlNode = dlNodes[i];
// 				
// 				if (dlNodes.className === className) {
// 					
// 					return dlNode;
// 				}
// 			}
// 			
// 			return null;
// 		}
// 		
// 		function getPlaceAndTimeByDefinitionListNode(dlNode) {
// 			
// 			const place = getInnerTextByFirstElementOfTagName(dlNode, 'dd');
// 			const time = getInnerTextByFirstElementOfTagName(dlNode, 'dt').replace(/時/, ':').replace(/分.*/, '');
// 			
// 			return new PlaceAndTime(place, time);
// 		}
// 		
// 		function getShinkansenName() {
// 			
// 			const nameNode = contentsSectionNode.getElementsByClassName('name')[0];
// 			
// 			const label = getInnerTextByFirstElementOfTagName(nameNode, 'h3');
// 			const carType = getInnerTextByFirstElementOfTagName(nameNode, 'ul');
// 			
// 			return new ShinkansenName(label, carType);
// 		}
// 		
// 		function getSeatType() {
// 			
// 			return contentsSectionNode.getElementsByTagName('cartype')[0].innerText;
// 		}
// 		
// 		function getSeatNumber() {
// 
// 			const tableNodes = contentsSectionNode.getElementsByTagName('table');
// 			
// 			return tableNodes[0].innerText + ' (' + tableNodes[1].innerText + ')';
// 		}
// 		
// 		const shinkansenName = getShinkansenName();
// 		const seatType = getSeatType();
// 		const seatNumber = getSeatNumber();
// 		const departurePlaceAndTime = getPlaceAndTimeByDefinitionListNode(getDefinitionListTagByClassName('dep'));
// 		const arrivalPlaceAndTime = getPlaceAndTimeByDefinitionListNode(getDefinitionListTagByClassName('arr'));
// 		
// 		return new ShinkansenInformation(shinkansenName, seatType, seatNumber, departurePlaceAndTime, arrivalPlaceAndTime);
// 	}
// 
// 	function getReservationDescription() {
// 		
// 		function makeReservationDescription() {
// 			
// 			const contentsSectionNode = getMainContentsSectionNode();
// 	
// 			return contentsSectionNode.innerText;
// 		}
// 		
// 		function getDate() {
// 			
// 			const contentsSectionNode = getMainContentsSectionNode();
// 			const dateNode = getElementsByClassName('date')[0];
// 			
// 			return dateNode.innerText;
// 		}
// 		
// 		const shinkansenInformation = getShinkansenInformation();
// 		const date = getDate();
// 		const description = makeReservationDescription();
// 		
// 		return ReservationDescription(shinkansenInformation, date, description);
// 	}
// 	
// 	function makeCalendarFileData(reservationDescription) {
// 		
// 		const currentYear = date.getFullYear();
// 		const currentMonth = date.getMonth();
// 
// 		function makeDateByPlaceAndTime(placeAndTime) {
// 			
// 			const dateComponents = reservationDescription.date.replace(/[^0-9]/g, ' ').split(' ');
// 			const timeComponents = placeAndTime.time.split(':');
// 
// 			const minute = timeComponents[1];
// 			const hour = timeComponents[0]
// 			const day = dateComponents[1];
// 			const month = dateComponents[0] - 1;
// 			const year = baseMonth < currentMonth ? currentYear : currentYear + 1;
// 	
// 			return new Date(year, month, day, hour, minute);
// 		}
// 		
// 		function getCalendarStartDateTime() {
// 			
// 			return makeDateByPlaceAndTime(reservationDescription.departurePlaceAndTime)
// 		}
// 		
// 		function getCalendarEndDateTime() {
// 
// 			return makeDateByPlaceAndTime(reservationDescription.arrivalPlaceAndTime)
// 		}
// 		
// 		function getCalendarDateTimeAsString(date) {
// 
// 			const yearText = String(date.getFullYear());
// 			const monthText = ('0' + String(date.getMonth() + 1)).slice(-2);
// 			const dayText = ('0' + String(date.getDate())).slice(-2);
// 			const hoursText = ('0' + String(date.getHours())).slice(-2);
// 			const minutesText = ('0' + String(date.getMinutes())).slice(-2);
// 			const secondsText = ('0' + String(date.getSeconds())).slice(-2);
// 
// 			return yearText + monthText + dayText + 'T' + hoursText + minutesText + secondsText;
// 		}
// 		
// 		function convertToContentTextFrom(text) {
// 			
// 			return text.replace(/\n/g, '\\n');
// 		}
// 		
// 		function getStationLocation() {
// 			
// 			return reservationDescription.shinkansenInformation.departurePlaceAndTime.place + '駅';
// 		}
// 		
// 		const label = reservationDescription.shinkansenInformation.shinkansenName.label;
// 		const description = reservationDescription.description;
// 		const stationLocation = getStationLocation();
// 		
// 		const calendarData = [
// 			'BEGIN:VCALENDAR',
// 			'VERSION:2.0',
// 			'PRODID:-//ez-net.jp//JRExpressRideToCalendar',
// 			'CALSCALE:GREGORIAN',
// 			'METHOD:PUBLISH',
// 			'X-WR-CALNAME:' + convertToContentTextFrom(label),
// 			'X-WR-TIMEZONE:JST',
// 			'BEGIN:VEVENT',
// 			'SUMMARY:' + convertToContentTextFrom(label),
// 			'DTSTART;TZID=JST;VALUE=DATE:' + getCalendarDateOnlyAsString(getCalendarStartDateTime()),
// 			'DTEND;TZID=JST;VALUE=DATE:' + getCalendarDateOnlyAsString(getCalendarEndDateTime()),
// 			'DTSTAMP;VALUE=DATE-TIME:' + getCalendarDateTimeAsString(currentDate),
// 			'CREATED;VALUE=DATE-TIME:' + getCalendarDateTimeAsString(currentDate),
// 			'DESCRIPTION:' + convertToContentTextFrom(description),
// 			'LOCATION:' + convertToContentTextFrom(stationLocation),
// 			'URL:' + convertToContentTextFrom('https://expy.jp/'),
// 			'END:VEVENT',
// 			'END:VCALENDAR'
// 			];
// 
// 		return calendarData.join('\n');
// 	}
// 
// 	try {
// 
// 		const reservationDescription = getReservationDescription();
// 		const calendarData = makeCalendarFileData(accommodationDescription, hotelInformation);
// 		const calendarFileURI = 'data:text/calendar;charset=utf8,' + encodeURI(calendarData);
// 	
// 		window.open(calendarFileURI, 'test');
// 	}
})()
