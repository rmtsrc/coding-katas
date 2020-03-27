import "core-js/stable";
import "regenerator-runtime/runtime";
import "formdata-polyfill";

import logger from './logger';

import '../css/index.scss';
import subscribeToFormEvents from '../js/events';

subscribeToFormEvents();

logger('it works well!');
