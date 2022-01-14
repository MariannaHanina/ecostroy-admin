import { addRoute } from '@/router';
import route from './route';

import { registerModule } from '@/store';
import servicesModule from './store';
import { TServicesState } from './types';

registerModule<TServicesState>('services', servicesModule);

addRoute(route);