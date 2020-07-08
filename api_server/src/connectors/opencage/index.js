import opencage from 'opencage-api-client';

export default {
  locationToLatLng: async (location) => opencage.geocode({ q: location, no_annotations: 1 }),
};
