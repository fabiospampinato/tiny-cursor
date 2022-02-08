
/* IMPORT */

import whenExit from 'when-exit';

/* MAIN */

class Cursor {

  /* VARIABLES */

  private stream: NodeJS.WriteStream;
  private visible: boolean;

  /* CONSTRUCTOR */

  constructor ( stream: NodeJS.WriteStream = process.stdout ) {

    this.stream = stream;
    this.visible = true;

    whenExit ( this.show );

  }

  /* API */

  has = (): boolean => {

    return this.visible;

  };

  hide = (): void => {

    return this.toggle ( false );

  };

  show = (): void => {

    return this.toggle ( true );

  };

  toggle = ( force: boolean = !this.visible ): void => {

    if ( !this.stream.isTTY ) return;

    this.visible = force;

    const command = force ? '\u001B[?25h' : '\u001B[?25l';

    this.stream.write ( command );

  };

}

/* EXPORT */

export default Cursor;
