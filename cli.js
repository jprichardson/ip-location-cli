#!/usr/bin/env node
const ipLocation = require('ip-location')
const meow = require('meow')

const cli = meow(`
	Usage
	  $ ip-location [ip-or-hostname]

	Hostname Example
	  $ ip-location github.com

    {
      "ip": "192.30.252.130",
      "country_code": "US",
      "country_name": "United States",
      "region_code": "CA",
      "region_name": "California",
      "city": "San Francisco",
      "zip_code": "94107",
      "time_zone": "America/Los_Angeles",
      "latitude": 37.7697,
      "longitude": -122.3933,
      "metro_code": 807
    }

  IP Address Example
    $ ip-location 8.8.8.8

    {
      "ip": "8.8.8.8",
      "country_code": "US",
      "country_name": "United States",
      "region_code": "CA",
      "region_name": "California",
      "city": "Mountain View",
      "zip_code": "94040",
      "time_zone": "America/Los_Angeles",
      "latitude": 37.3845,
      "longitude": -122.0881,
      "metro_code": 807
    }

  Your Own IP Address Example
    $ ip-location

`)

const ipOrHostname = cli.input[0] || ''

ipLocation(ipOrHostname, (err, data) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(JSON.stringify(data, null, 2))
})
