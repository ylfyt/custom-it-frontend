export const convertTimestampToDatetime = (tstamp: string) => {
	const date = new Date(parseInt(tstamp)).toLocaleDateString('en-US');
	const time = new Date(parseInt(tstamp)).toLocaleTimeString('en-US');

	return date + ' ' + time;
};
