import d3 from 'd3-geo';
import deliveryGeoJSON from '../delivery-areas/delivery-areas.js';

export default {
  islatLngServicable: (lat, lng) =>
    deliveryGeoJSON.features.find((feature) => d3.geoContains(feature, [lat, lng])),
};
