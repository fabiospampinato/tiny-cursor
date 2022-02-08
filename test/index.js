
/* IMPORT */

const {describe} = require ( 'fava' );
const delay = require ( 'promise-resolve-timeout' );
const {default: Cursor} = require ( '../dist' );

/* MAIN */

describe ( 'Tiny Cursor', it => {

  it ( 'works', async t => {

    t.true ( Cursor.has () );

    Cursor.hide ();

    await delay ( 150 );

    t.false ( Cursor.has () );

    Cursor.show ();

    await delay ( 150 );

    t.true ( Cursor.has () );

    Cursor.toggle ();

    await delay ( 150 );

    t.false ( Cursor.has () );

    Cursor.toggle ();

    await delay ( 150 );

    t.true ( Cursor.has () );

    Cursor.toggle ( true );
    Cursor.toggle ( true );

    await delay ( 150 );

    t.true ( Cursor.has () );

    Cursor.toggle ( false );
    Cursor.toggle ( false );

    await delay ( 150 );

    t.false ( Cursor.has () );

  });

});
