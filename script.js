import ScrollSuave from './modules/initScrollSuave/index.js';
import Accordion from './modules/initAccordion/index.js';
import TabNav from './modules/initTabNav/index.js';
import Modal from './modules/initModal/index.js';
import ToolTip from './modules/initToolTip/index.js';

import { changeClasses } from './modules/changeClasses/index.js';
import { initAnimationScroll } from './modules/initAnimationScroll/index.js';
import { dropDownMenu } from './modules/dropDownMenu/index.js';
import { initMenuMobile } from './modules/initMenuMobile/index.js';
import { initWork } from './modules/initWork/index.js';
import { initFetchAnimals } from './modules/initFetchAnimals/index.js';
import { initFetchBitcoin } from './modules/initFetchBitcoin/index.js';

const options = {
  behavior: 'smooth',
  block: 'start',
}

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]', options)
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '.modal-container')
modal.init()

const toolTip = new ToolTip('[data-tooltip]')
toolTip.init()

changeClasses();
initAnimationScroll();
dropDownMenu();
initMenuMobile();
initWork();
initFetchAnimals();
initFetchBitcoin();
