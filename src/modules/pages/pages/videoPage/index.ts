import { addRoute } from '@/router';
import route from './route';

import { registerModule } from '@/store';
import videoModule from './store';
import { TVideoState } from './types';

registerModule<TVideoState>('video', videoModule);

addRoute(route);