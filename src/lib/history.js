// history.js
import { createBrowserHistory } from 'history';
import { stringify, parse } from 'qs';
import qhistory from 'qhistory';

// Get history with query object support
const history = qhistory(createBrowserHistory(), stringify, parse);

export default history;
