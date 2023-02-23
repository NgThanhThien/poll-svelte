import moment from 'moment';

export const timeFromNow = (time: string) => {
	return moment(time).startOf('hour').fromNow();
};
export const formatTime = (time: string) =>{
	return moment(time).format('L')
}