(function() {

	const stationAddressTable = {
		'東京駅' : '東京都千代田区, 丸の内',
		'品川駅' : '〒108-0075, 東京都港区, 港南',
		'新横浜駅' : '〒222-0033, 神奈川県横浜市港北区, 新横浜2丁目100番45号',
		'小田原駅' : '〒250-0045, 神奈川県小田原市, 城山',
		'熱海駅' : '〒413-0011, 静岡県熱海市, 田原本町',
		'三島駅' : '〒411-0036, 静岡県三島市, 一番町',
		'新富士駅' : '〒416-0939, 静岡県富士市, 川成島',
		'静岡駅' : '〒420-0851, 静岡県静岡市葵区, 黒金町',
		'掛川駅' : '〒436-0077, 静岡県掛川市, 駅前',
		'浜松駅' : '〒430-0926, 静岡県浜松市中区, 砂山町',
		'豊橋駅' : '〒440-0075, 愛知県豊橋市, 花田町',
		'三河安城駅' : '〒446-0058, 愛知県安城市, 三河安城南町',
		'名古屋駅' : '〒450-0002, 愛知県名古屋市中村区, 名駅',
		'岐阜羽島駅' : '〒501-6257, 岐阜県羽島市, 福寿町平方',
		'米原駅' : '〒521-0012, 滋賀県米原市, 米原',
		'京都駅' : '〒600-8215, 京都府京都市下京区, 東塩小路釜殿町',
		'新大阪駅' : '〒532-0011, 大阪府大阪市淀川区, 西中島',
		'新神戸駅' : '〒650-0001, 兵庫県神戸市中央区, 加納町',
		'西明石駅' : '〒673-0005, 兵庫県明石市, 小久保',
		'姫路駅' : ' 〒670-0927, 兵庫県姫路市, 駅前町',
		'相生駅' : '〒678-0006, 兵庫県相生市, 本郷町',
		'岡山駅' : '〒700-0024, 岡山県岡山市北区, 駅元町',
		'新倉敷駅' : '〒710-0252, 岡山県倉敷市, 玉島爪崎',
		'福山駅' : '〒720-0066, 広島県福山市, 三之丸町',
		'新尾道駅' : '〒722-0022, 広島県尾道市, 栗原町',
		'三原駅' : '〒723-0014, 広島県三原市, 城町',
		'東広島駅' : '〒739-0023, 広島県東広島市, 西条町下三永',
		'広島駅' : '〒732-0822, 広島県広島市南区, 松原町',
		'新岩国駅' : '〒741-0083, 山口県岩国市, 御庄',
		'徳山駅' : '〒745-0035, 山口県周南市, 有楽町',
		'新山口駅' : '〒754-0021, 山口県山口市, 小郡黄金町7-4',
		'厚狭駅' : '〒757-0006, 山口県山陽小野田市, 桜',
		'新下関駅' : '〒751-0872, 山口県下関市, 秋根南町',
		'小倉駅' : '〒802-0001, 福岡県北九州市小倉北区, 浅野',
		'博多駅' : '〒812-0012, 福岡県福岡市博多区, 博多駅中央街5-1'
	};

	const currentDate = new Date();

	class PlaceAndTime {
		
		constructor(place, time) {
			
			this._place = place;
			this._time = time;
		}
		
		get place() {
			
			return this._place;
		}
		
		get time() {
			
			return this._time;
		}
	}
	
	class ShinkansenName {
		
		constructor(label, carType) {

			this._label = label;
			this._carType = carType;
		}
		
		get label() {
			
			return this._label;
		}
		
		get carType() {
			
			return this._carType;
		}
	}
	
	class ShinkansenInformation {
		
		constructor(shinkansenName, seatType, seatNumber, departurePlaceAndTime, arrivalPlaceAndTime) {
			
			this._shinkansenName = shinkansenName;
			this._seatType = seatType;
			this._seatNumber = seatNumber;
			this._departurePlaceAndTime = departurePlaceAndTime;
			this._arrivalPlaceAndTime = arrivalPlaceAndTime;
		}
		
		get shinkansenName() {
			
			return this._shinkansenName;
		}
		
		get seatType() {
			
			return this._seatType;
		}
		
		get departurePlaceAndTime() {
			
			return this._departurePlaceAndTime;
		}
		
		get arrivalPlaceAndTime() {
			
			return this._arrivalPlaceAndTime;
		}
	}
	
	class ReservationDescription {
		
		constructor(shinkansenInformation, date, description) {
			
			this._shinkansenInformation = shinkansenInformation;
			this._date = date;
			this._description = description;
		}
		
		get date() {
			
			return this._date;
		}
		
		get shinkansenInformation() {
			
			return this._shinkansenInformation;
		}

		get description() {
			
			return this._description;
		}		
	}
	
	function getInnerTextByFirstElementOfTagName(node, name) {
		
		const targetNode = node.getElementsByTagName(name)[0];
		const innerText = targetNode.innerText;
		
		return innerText;
	}

	function getMainContentsSectionNode() {
		
		const sectionNodes = document.getElementsByTagName('section');
		
		for (let i = 0; i != sectionNodes.length; ++i) {
			
			const sectionNode = sectionNodes[i];
			
			if (sectionNode.className === 'main-contents') {
				
				return sectionNode;
			}
			
			return null;
		}
	}

	function getSubContentsSectionNode() {
		
		const sectionNodes = document.getElementsByTagName('section');

		for (let i = 0; i != sectionNodes.length; ++i) {
			
			const sectionNode = sectionNodes[i];
			
			if (sectionNode.className === 'sub-contents') {
				
				return sectionNode;
			}
			
		}

		return null;
	}
	
	function getShinkansenInformation() {
		
		const contentsSectionNode = getSubContentsSectionNode();

		function getDefinitionListTagByClassName(className) {
		
			const dlNodes = contentsSectionNode.getElementsByTagName('dl');
			
			for (let i = 0; i != dlNodes.length; ++i) {
				
				const dlNode = dlNodes[i];

				if (dlNode.className === className) {
					
					return dlNode;
				}
			}
			
			return null;
		}
		
		function getPlaceAndTimeByDefinitionListNode(dlNode) {
			
			const place = getInnerTextByFirstElementOfTagName(dlNode, 'dd').replace(/　| /g, '');
			const time = getInnerTextByFirstElementOfTagName(dlNode, 'dt').replace(/時/, ':').replace(/分.*/, '');
			
			return new PlaceAndTime(place, time);
		}
		
		function getShinkansenName() {
			
			const nameNode = contentsSectionNode.getElementsByClassName('name')[0];
			
			const label = getInnerTextByFirstElementOfTagName(nameNode, 'h3');
			const carType = getInnerTextByFirstElementOfTagName(nameNode, 'ul');

			return new ShinkansenName(label, carType);
		}
		
		function getSeatType() {
			
			return contentsSectionNode.getElementsByClassName('cartype')[0].innerText;
		}
		
		function getSeatNumber() {

			const tableNodes = contentsSectionNode.getElementsByTagName('table');
			
			return tableNodes[0].innerText + ' (' + tableNodes[1].innerText + ')';
		}
		
		const shinkansenName = getShinkansenName();
		const seatType = getSeatType();
		const seatNumber = getSeatNumber();
		const departurePlaceAndTime = getPlaceAndTimeByDefinitionListNode(getDefinitionListTagByClassName('dep'));
		const arrivalPlaceAndTime = getPlaceAndTimeByDefinitionListNode(getDefinitionListTagByClassName('arr'));

		return new ShinkansenInformation(shinkansenName, seatType, seatNumber, departurePlaceAndTime, arrivalPlaceAndTime);
	}

	function getReservationDescription() {
		
		function makeReservationDescription() {
			
			const contentsSectionNode = getMainContentsSectionNode();
	
			return contentsSectionNode.innerText;
		}
		
		function getDate() {
			
			const contentsSectionNode = getMainContentsSectionNode();
			const dateNode = contentsSectionNode.getElementsByClassName('date')[0];
			
			return dateNode.innerText;
		}
		
		const shinkansenInformation = getShinkansenInformation();
		const date = getDate();
		const description = makeReservationDescription();
		
		return new ReservationDescription(shinkansenInformation, date, description);
	}
	
	function makeCalendarFileData(reservationDescription) {
		
		const currentYear = currentDate.getFullYear();
		const currentMonth = currentDate.getMonth();

		function makeDateByPlaceAndTime(placeAndTime) {
			
			const dateComponents = reservationDescription.date.replace(/[^0-9]/g, ' ').split(' ');
			const timeComponents = placeAndTime.time.split(':');

			const minute = timeComponents[1];
			const hour = timeComponents[0]
			const day = dateComponents[1];
			const month = dateComponents[0] - 1;
			const year = month < currentMonth ? currentYear + 1: currentYear;

			return new Date(year, month, day, hour, minute);
		}
		
		function getCalendarStartDateTime() {
			
			return makeDateByPlaceAndTime(reservationDescription.shinkansenInformation.departurePlaceAndTime)
		}
		
		function getCalendarEndDateTime() {

			return makeDateByPlaceAndTime(reservationDescription.shinkansenInformation.arrivalPlaceAndTime)
		}
		
		function getCalendarDateTimeAsString(date) {

			const yearText = String(date.getFullYear());
			const monthText = ('0' + String(date.getMonth() + 1)).slice(-2);
			const dayText = ('0' + String(date.getDate())).slice(-2);
			const hoursText = ('0' + String(date.getHours())).slice(-2);
			const minutesText = ('0' + String(date.getMinutes())).slice(-2);
			const secondsText = ('0' + String(date.getSeconds())).slice(-2);

			return yearText + monthText + dayText + 'T' + hoursText + minutesText + secondsText;
		}
		
		function convertToContentTextFrom(text) {
			
			return text.replace(/\n/g, '\\n');
		}
		
		function getStationLocation() {
			
			const name = reservationDescription.shinkansenInformation.departurePlaceAndTime.place + '駅'
			const address = stationAddressTable[name].replace(/,/g, '\\,');
			
			if (address) {
				
				return name + '\n' + address;
			}
			else {
				
				return name;
			}
		}
		
		const label = reservationDescription.shinkansenInformation.shinkansenName.label;
		const description = reservationDescription.description;
		const stationLocation = getStationLocation();
		
		const calendarData = [
			'BEGIN:VCALENDAR',
			'VERSION:2.0',
			'PRODID:-//ez-net.jp//JRExpressRideToCalendar',
			'CALSCALE:GREGORIAN',
			'METHOD:PUBLISH',
			'X-WR-CALNAME:' + convertToContentTextFrom(label),
			'X-WR-TIMEZONE:JST',
			'BEGIN:VEVENT',
			'SUMMARY:' + convertToContentTextFrom(label),
			'DTSTART;TZID=JST;VALUE=DATE-TIME:' + getCalendarDateTimeAsString(getCalendarStartDateTime()),
			'DTEND;TZID=JST;VALUE=DATE-TIME:' + getCalendarDateTimeAsString(getCalendarEndDateTime()),
			'DTSTAMP;VALUE=DATE-TIME:' + getCalendarDateTimeAsString(currentDate),
			'CREATED;VALUE=DATE-TIME:' + getCalendarDateTimeAsString(currentDate),
			'DESCRIPTION:' + convertToContentTextFrom(description),
			'LOCATION:' + convertToContentTextFrom(stationLocation),
			'URL:' + convertToContentTextFrom('https://expy.jp/'),
			'END:VEVENT',
			'END:VCALENDAR'
			];

		return calendarData.join('\n');
	}

	try {

		const reservationDescription = getReservationDescription();
		const calendarData = makeCalendarFileData(reservationDescription);
		const calendarFileURI = 'data:text/calendar;charset=utf8,' + encodeURI(calendarData);
	
		window.open(calendarFileURI, 'test');
	}
	catch (error) {
		
		alert('予約情報の取得に失敗しました。' + error.message + ' (line: ' + error.line + ')');
	}
})()
