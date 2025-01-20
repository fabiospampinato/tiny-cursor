
/* IMPORT */

import {describe} from 'fava';
import Cursor from '../dist/index.js';

/* MAIN */

describe ( 'Tiny Cursor', it => {

  it ( 'works', async t => {

    t.true ( Cursor.has () );

    Cursor.hide ();

    await t.wait ( 150 );

    t.false ( Cursor.has () );

    Cursor.show ();

    await t.wait ( 150 );

    t.true ( Cursor.has () );

    Cursor.toggle ();

    await t.wait ( 150 );

    t.false ( Cursor.has () );

    Cursor.toggle ();

    await t.wait ( 150 );

    t.true ( Cursor.has () );

    Cursor.toggle ( true );
    Cursor.toggle ( true );

    await t.wait ( 150 );

    t.true ( Cursor.has () );

    Cursor.toggle ( false );
    Cursor.toggle ( false );

    await t.wait ( 150 );

    t.false ( Cursor.has () );

  });

});
