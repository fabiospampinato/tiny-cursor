# Tiny Cursor

A tiny library for hiding and showing the cursor in the terminal.

## Install

```sh
npm install --save tiny-cursor
```

## Usage

```ts
import Cursor from 'tiny-cursor';

Cursor.has (); // => true, the cursor is visible

Cursor.hide ();

Cursor.has (); // => false, the cursor is not visible

Cursor.show ();

Cursor.has (); // => true, the cursor is visible

Cursor.toggle ();

Cursor.has (); // => false, the cursor is not visible
```

## License

MIT © Fabio Spampinato
