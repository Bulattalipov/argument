// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import sliderVideos from './modules/sliderVideos';

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  lazyIMages();
  initModal();
  sliderVideos();
});
