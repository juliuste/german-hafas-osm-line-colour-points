'use strict'

const osmTransitLines = require('osm-transit-lines')
const { linesToPoints } = require('hafas-osm-line-colours')

const fetchLines = async () => {
	const germanyBbox = {
		north: 56,
		west: 4,
		south: 47,
		east: 15
	}
	const lines = await osmTransitLines(germanyBbox, { logging: true, wikidata: true })
	const points = linesToPoints(lines)
	process.stdout.write(JSON.stringify(points))
}

fetchLines()
	.catch(console.error)
