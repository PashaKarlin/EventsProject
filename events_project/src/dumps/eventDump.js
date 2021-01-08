import moment from 'moment'

export function eventsDump(events) {
    return events.map(event => {
        return {
            ...event,
            date: moment(event.date, "DD.MM.YYYY HH:mm"),
            location: JSON.parse(event.location)
        }
    })
}