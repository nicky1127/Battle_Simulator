import boURL from './boURL';
import layout from './layout';
import toast from './toast';
import downstreams from 'redux/api/downstreams/actions/sync-actions';
import ivr from 'redux/api/ivr/actions/sync-actions';
import logs from 'redux/api/logs/actions/sync-actions';
import settings from 'redux/api/settings/actions/sync-actions';

const data = {
  boURL,
  layout,
  toast,
  downstreams,
  ivr,
  logs,
  settings
};

export default data;
