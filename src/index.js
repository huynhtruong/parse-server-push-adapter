"use strict";
// LezmeParsePushAdapter is the default implementation of
// PushAdapter, it uses GCM for android push and APNS
// for ios push.
import log from 'npmlog';

/* istanbul ignore if */
if (process.env.VERBOSE || process.env.VERBOSE_PARSE_SERVER_PUSH_ADAPTER) {
  log.level = 'verbose';
}

import LezmeParsePushAdapter from './LezmeParsePushAdapter';
import GCM from './GCM';
import APNS from './APNS';
import * as utils from './PushAdapterUtils';

export default LezmeParsePushAdapter;
export { LezmeParsePushAdapter, APNS, GCM, utils };
