import { GET_EVENTS } from '../actions/Events.js';
import { events as initialEvents } from '../constants/other';

const initialState = {
    events : initialEvents
};

export default function events(state = initialState, action) { // eslint-disable-line
    switch (action.type) {
        case GET_EVENTS:
            return { ...state, events: action.payload };
        default:
            return state;
    }
}
