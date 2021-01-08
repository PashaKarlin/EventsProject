import moment from 'moment';

export const eventTypes = {
    eat   : 'Eating',
    drink : 'Drinking',
    party : 'Partying',
    dance : 'Dancing'
};

export const events = [
    {
        name        : 'dafvadfv',
        type        : 'eat',
        logo        : 'https://media.istockphoto.com/photos/nicelooking-attractive-gorgeous-glamorous-elegant-stylish-cheerful-picture-id1165055006?k=6&m=1165055006&s=612x612&w=0&h=X_d75QPcjQ0Zx-X2tTD4npQOIjD6lKXdDPqxJHuovhc=',
        description : 'ergwergwer',
        date        : moment(),
        location    : {
            lat : 49.45012649,
            lon : -329.47622538
        }
    },
    {
        name        : 'dafvadfv',
        type        : 'drink',
        logo        : '',
        description : 'ergwergwer',
        date        : moment(),
        location    : {
            lat : 51.45012649,
            lon : -329.47622538
        }
    },
    {
        name        : 'dafvadfv',
        type        : 'party',
        logo        : 'https://media.istockphoto.com/photos/nicelooking-attractive-gorgeous-glamorous-elegant-stylish-cheerful-picture-id1165055006?k=6&m=1165055006&s=612x612&w=0&h=X_d75QPcjQ0Zx-X2tTD4npQOIjD6lKXdDPqxJHuovhc=',
        description : 'ergwergwer',
        date        : moment(),
        location    : {
            lat : 50.45012649,
            lon : -328.47622538
        }
    },
    {
        name        : 'dafvadfv',
        type        : 'dance',
        logo        : '',
        description : 'ergwergwer',
        date        : moment(),
        location    : {
            lat : 50.45012649,
            lon : -330.47622538
        }
    }
];
