import tj from '@tmcw/togeojson';
import fs from 'fs';
import xmldom from 'xmldom';

const DOMParser = xmldom.DOMParser;

const kml = new DOMParser().parseFromString(fs.readFileSync(`${__dirname}/delivery-areas.kml`, 'utf8'));

// const converted = tj.kml(kml);

const convertedWithStyles = tj.kml(kml, { styles: true });

export default convertedWithStyles;
