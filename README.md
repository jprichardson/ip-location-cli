ip-location-cli
===============

> Command line utility to fetch the location of an IP address, host name, or your own location.

Uses [freegeoip.net](http://freegeoip.net/) to query for information. freegeoip.net uses
[MaxMind Geolite 2](http://dev.maxmind.com/geoip/geoip2/geolite2/).


Install
-------

    npm i --global ip-location-cli


Usage
-----

    $ ip-location-cli --help

```

  Command line utility to get an IP or hostname geo location.

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
```

Related
-------

- [ip-location](https://github.com/jprichardson/ip-location) API for this module.


License
-------

MIT - Copyright (c) [JP Richardson](https://github.com/jprichardson)
