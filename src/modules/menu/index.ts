import { addRoute } from '@/router';
import route from './route';

import { registerModule } from '@/store';
import menuModule from './store';
import { TMenuState } from './types';

addRoute(route);
registerModule<TMenuState>('menu', menuModule);