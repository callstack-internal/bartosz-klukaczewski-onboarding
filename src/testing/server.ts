import {rest} from 'msw';
import {setupServer} from 'msw/node';

import {openWeatherGroup} from './data';

export const mockWeatherGroupResponseSuccess = rest.get(
  'https://api.openweathermap.org/data/2.5/group',
  (req, res, ctx) => res(ctx.status(200), ctx.json(openWeatherGroup)),
);

export const mockWeatherGroupResponseFailure = rest.get(
  'https://api.openweathermap.org/data/2.5/group',
  (req, res, ctx) => res(ctx.status(500)),
);

export const mswServer = setupServer(mockWeatherGroupResponseSuccess);
