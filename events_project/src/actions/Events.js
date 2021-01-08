import api from '../singleton/api';
import {eventsDump} from '../dumps/eventDump'
export const GET_EVENTS = 'GET_EVENTS';

export  async function getEventsList({dispatch}) {

        try {
            const payload = await api.events.getEvents();
            
            dispatch({
                type : GET_EVENTS,
                payload: eventsDump(payload)
            });
        } catch (errorData) {
            console.log(errorData)
        }
    
}

