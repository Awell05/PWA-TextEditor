import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDB = await openDB('jate', 1);
  const jt = jateDB.transaction('jate', 'readwrite');
  const store = jt.objectStore('jate')
  const retrieve = store.put({id: 1, value: content});
  const results = await retrieve;
  console.log = ("these are the results", results);
;  
  
  console.error('putDb not implemented');


};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => { console.log('GET from the database');
const connectDB = await connectDB ('jate', 1 );
const jt = jatetDb.transaction('jate', 'readonly');
const store = jt.objectStore('jate');
const request = store.getAll();
console.error('getDb not implemented');

const results = await request;
console.log('result.value', results);
return results;

};

initdb();
