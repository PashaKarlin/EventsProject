import Base from './Base.js';

class Events extends Base {
    getEvents() {
        return this.apiClient.get('/events');
    }

    addEvent(payload) {
        return this.apiClient.post('events', payload);
    }
}
export default Events;
