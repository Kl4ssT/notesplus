import Realm from 'realm';

import Notes from './Notes';

const realm = new Realm({ schema: [Notes] });

export default realm;