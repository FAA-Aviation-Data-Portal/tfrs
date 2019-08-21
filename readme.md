# tfrs

Fetch temporary flight restrictions and related data from https://tfr.faa.gov

[![NPM Version][npm-image]][npm-url]

## Installation

```console
$ npm install --save @faa-aviation-data-portal/tfrs
```

## Usage

```js
tfrs.list().then(results => {
  console.log(JSON.stringify(results, null, 2))
})
```

### Partial Output

```json
[
  {
    "date": "08/15/2019",
    "notam": "9/2094",
    "facility": "ZLA",
    "state": "UT",
    "type": "HAZARDS",
    "description": "52NM SW OF ST. GEORGE, UT, Thursday, August 15, 2019 through Monday, September 30, 2019 UTC New  ",
    "links": {
      "details": "https://tfr.faa.gov/save_pages/detail_9_2094.html",
      "zoom": "https://tfr.faa.gov/tfr_map_ims/html/cc/scale3/tile_2_3.html",
      "xml": "https://tfr.faa.gov/save_pages/detail_9_2094.xml"
    }
  },
  ...
]
```

## API

### `tfrs.list()`

### `tfrs.fetch(tfrId, options)`

#### `tfrId`

The TFR NOTAM ID, e.g., `9/2094`

Type: `string`

#### `options`

Options to customize the results of the `fetch()` method

Type: `object`

Example:

```json
{
  "format": "json"
}
```

##### `options.format`

Specify the format of the results. Note, not all formats contain the same information.

Type: `string`

Valid values:

- `json`
- `xml`
- `aixm`

## Contributing

Contributions welcome!

## License

MIT © [Forrest Desjardins](https://github.com/fdesjardins)

[npm-url]: https://www.npmjs.com/package/@faa-aviation-data-portal/tfrs
[npm-image]: https://img.shields.io/npm/v/@faa-aviation-data-portal/tfrs.svg?style=flat
