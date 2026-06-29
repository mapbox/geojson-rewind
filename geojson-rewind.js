#!/usr/bin/env node

import rewind from "@mapbox/geojson-rewind";
import getStream from "get-stream";
import fs from "fs";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2), {
    boolean: 'clockwise'
});

const help = `
usage:

    geojson-rewind < foo.geojson > foo.geojson
    geojson-rewind foo.geojson > bar.geojson

options:

    --clockwise

    if specified, set outer ring to clockwise
    and inner rings to counterclockwise`.trim();

if (process.stdin.isTTY && !argv._[0]) {
    console.log(help);
    process.exit(1);
}

getStream(argv._.length ? fs.createReadStream(argv._[0]) : process.stdin)
  .then(convert);

function convert(data) {
    process.stdout.write(JSON.stringify(rewind(JSON.parse(data), argv.clockwise)));
}
