import { addRoute } from '@/router';
import route from './route';

import { registerModule } from '@/store';
import contactsModule from './store';
import { TContactsState } from './types';

addRoute(route);
registerModule<TContactsState>('contacts', contactsModule);