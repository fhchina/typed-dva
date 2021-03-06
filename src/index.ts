import * as hashHistory from 'react-router/lib/hashHistory';
import {
	routerMiddleware,
	syncHistoryWithStore,
	routerReducer as routing,
} from 'react-router-redux';

import Plugin from './plugin'; // tsc will give error TS4082 without this import
import { DvaInstance, Hooks, DvaOption, Model } from "./createDva"

import createDva from './createDva';

export default createDva({
	mobile: false,
	initialReducer: {
		routing,
	},
	defaultHistory: hashHistory,
	routerMiddleware,

	setupHistory(history) {
		this._history = syncHistoryWithStore(history, this._store);
	},
});
