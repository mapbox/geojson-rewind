# geojson-rewind

The [GeoJSON](https://tools.ietf.org/html/rfc7946) specification is [picky about winding order](https://tools.ietf.org/html/rfc7946#section-3.1.6).

This helps you generate compliant Polygon and MultiPolygon geometries. Furthermore it lets you use [Canvas](http://www.bit-101.com/blog/?p=3702) and other drawing libraries's default behavior to color the interior rings of Polygon and MultiPolygon features.

## Usage

As NPM module:

    npm install --save @mapbox/geojson-rewind

As a console utility:

    # install
    npm install -g @mapbox/geojson-rewind
    # use
    geojson-rewind foo.geojson

As a browser library: [geojson-rewind.js](https://bundle.run/geojson-rewind)

## API

`rewind(geojson, clockwise)`

Given a GeoJSON FeatureCollection, Feature, or Geometry, return a version
with inner and outer rings of different winding orders.

If `clockwise` is `true`, the outer ring is clockwise, otherwise
it is counterclockwise.

## Publishing

Pull Requests to `main` automatically publish a new version based on the PR's title prefix (`major:`, `minor:` or `patch:`) to the npmjs registry.

The published version in the registry is the source of truth for the package version, but you can manually increment the `package.json`'s `version`.

### Pre-release versions on other branches

For testing in downstream projects, you can manually trigger the "NPM release" workflow on a branch to publish a pre-release tagged with the short commit sha (e.g. `0.5.2-aa79c6a`) under the npm `prerelease` dist-tag, without affecting `latest`. Check the workflow results for the published version.
