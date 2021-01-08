import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../icons/location-pin.svg'),
    iconRetinaUrl: require('../../icons/location-pin.svg'),
    iconAnchor: null,
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45, 60)
});
const iconEat = new L.Icon({
    iconUrl: require('../../icons/eat-icon.svg'),
    iconRetinaUrl: require('../../icons/eat-icon.svg'),
    iconAnchor: null,
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45, 60)
});
const iconDrink = new L.Icon({
    iconUrl: require('../../icons/drink-icon.svg'),
    iconRetinaUrl: require('../../icons/drink-icon.svg'),
    iconAnchor: null,
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45, 60)
});
const iconParty = new L.Icon({
    iconUrl: require('../../icons/party-icon.svg'),
    iconRetinaUrl: require('../../icons/party-icon.svg'),
    iconAnchor: null,
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45, 60)
});
const iconDance = new L.Icon({
    iconUrl: require('../../icons/dance-icon.svg'),
    iconRetinaUrl: require('../../icons/dance-icon.svg'),
    iconAnchor: null,
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45, 60)
});

export { iconPerson, iconEat, iconDance, iconParty, iconDrink };