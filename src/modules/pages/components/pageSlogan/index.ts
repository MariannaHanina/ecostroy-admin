import { registerModule } from '@/store';
import sloganModule from './store';
import { TSloganState } from './types';

registerModule<TSloganState>('slogan', sloganModule);