# german-hafas-osm-line-colour-points

Points generated using hafas-osm-line-colours from data fetched using osm-transit-lines in Germany.

[![npm version](https://img.shields.io/npm/v/german-hafas-osm-line-colour-points.svg)](https://www.npmjs.com/package/german-hafas-osm-line-colour-points)
[![Build Status](https://travis-ci.org/juliuste/german-hafas-osm-line-colour-points.svg?branch=master)](https://travis-ci.org/juliuste/german-hafas-osm-line-colour-points)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/german-hafas-osm-line-colour-points.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/german-hafas-osm-line-colour-points.svg)](https://david-dm.org/juliuste/german-hafas-osm-line-colour-points)
[![license](https://img.shields.io/github/license/juliuste/german-hafas-osm-line-colour-points.svg?style=flat)](license)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```shell
npm install german-hafas-osm-line-colour-points
```

## Usage

The module exposes an array which contains the contents of `points` in the following script

```js
const osmTransitLines = require('osm-transit-lines')
const { linesToPoints } = require('hafas-osm-line-colours')

const germanyBbox = {
	north: 56,
	west: 4,
	south: 47,
	east: 15
}
const lines = await osmTransitLines(germanyBbox, { logging: true, wikidata: true })
const points = linesToPoints(lines)
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/german-hafas-osm-line-colour-points/issues).
