import Router from '@koa/router';
import d3 from '../connectors/d3/index.js';
import opencage from '../connectors/opencage/index.js';

const router = new Router();

router.get('/getOutletId', async (ctx, next) => {
  try {
    console.log('looking for lat long of location', ctx.query.location);
    const res = await opencage.locationToLatLng(ctx.query.location);
    if (!res.results.length) {
      ctx.status = 200;
      ctx.body = 'Location Not Found';
    }
    const { lat, lng } = res.results[0].geometry;
    const outlet = d3.islatLngServicable(lat, lng);
    console.log(outlet);
    ctx.status = 200;
    if (!outlet) {
      ctx.body = 'no outlet found';
    }
    ctx.body = outlet.name;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }

  next();
});

export default router;
