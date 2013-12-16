# geojson-rewind

The [GeoJSON](http://geojson.org/) specification is not picky about winding order, but
this is.

This lets you use [Canvas](http://www.bit-101.com/blog/?p=3702) and other drawing
libraries's default behavior to color the interior rings of Polygon and MultiPolygon
features.

## api

`rewind(geojson, counterclockwise)`

Given a GeoJSON FeatureCollection, Feature, or Geometry, return a version
with inner and outer rings of different winding orders.

If `counterclockwise` is `true`, the outer ring is counterclockwise, otherwise
it is clockwise.
