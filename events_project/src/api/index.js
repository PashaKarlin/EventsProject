import ApiClient   from './ApiClient.js';
import EventsAPI from './Events.js';

function makeApiList() {
    const api = new ApiClient();

    return {
        apiClient : api,
        sessions  : new EventsAPI({ apiClient: api })
    };
}

export default makeApiList;
