import api from '../singleton/api';

export const GET_EVENTS = 'GET_EVENTS';

export function getEventsList() {
    return async (dispatch) => {
        try {
            const payload = await api.events.getEvents();

            dispatch({
                type : GET_EVENTS,
                payload
            });
        } catch (errorData) {
            dispatch({
                type    : GET_EVENTS,
                payload : {
                    errorData
                }
            });
        }
    };
}

