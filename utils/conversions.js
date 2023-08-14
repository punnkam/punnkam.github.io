export function convertDateToFull(date) {
	// date is in the format of "2021/01/01"
	// want to convert to "January 1, 2021"
	const months = {
		1: "January",
		2: "February",
		3: "March",
		4: "April",
		5: "May",
		6: "June",
		7: "July",
		8: "August",
		9: "September",
		10: "October",
		11: "November",
		12: "December",
	}
	const dateArr = date.split("/")
	const year = dateArr[0]
	const month = months[parseInt(dateArr[1])]
	const day = dateArr[2]
	return `${month} ${day}, ${year}`
}

export function convertDateToAbbrev(date) {
	// date is in the format of "2021/01/01"
	// want to convert to "JAN 1, 2021"
	const months = {
		1: "JAN",
		2: "FEB",
		3: "MAR",
		4: "APR",
		5: "MAY",
		6: "JUN",
		7: "JUL",
		8: "AUG",
		9: "SEP",
		10: "OCT",
		11: "NOV",
		12: "DEC",
	}
	const dateArr = date.split("/")
	const year = dateArr[0]
	const month = months[parseInt(dateArr[1])]
	const day = dateArr[2]
	return `${month} ${day}, ${year}`

}