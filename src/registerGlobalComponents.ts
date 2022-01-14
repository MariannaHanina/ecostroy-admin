import { App } from 'vue';

import HeadingLevel1 from '@/components/HeadingLevel1.vue';
import HeadingLevel2 from '@/components/HeadingLevel2.vue';

import VideoFrame from '@/components/VideoFrame.vue';

import TextMediaBlock from '@/components/TextMediaBlock.vue';

export default function registerGlobalComponents(app: App): void {
  app
    .component('HeadingLevel1', HeadingLevel1)
    .component('HeadingLevel2', HeadingLevel2)
    .component('VideoFrame', VideoFrame)
    .component('TextMediaBlock', TextMediaBlock);
}