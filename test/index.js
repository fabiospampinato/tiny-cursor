
/* IMPORT */

import {describe} from 'fava';
import {setTimeout} from 'node:timers/promises';
import Cursor from '../dist/index.js';

/* MAIN */

describe ( 'Tiny Cursor', it => {

  it ( 'works', async t => {

    t.true ( Cursor.has () );

    Cursor.hide ();

    await setTimeout ( 150 );

    t.false ( Cursor.has () );

    Cursor.show ();

    await setTimeout ( 150 );

    t.true ( Cursor.has () );

    Cursor.toggle ();

    await setTimeout ( 150 );

    t.false ( Cursor.has () );

    Cursor.toggle ();

    await setTimeout ( 150 );

    t.true ( Cursor.has () );

    Cursor.toggle ( true );
    Cursor.toggle ( true );

    await setTimeout ( 150 );

    t.true ( Cursor.has () );

    Cursor.toggle ( false );
    Cursor.toggle ( false );

    await setTimeout ( 150 );

    t.false ( Cursor.has () );

  });

});
