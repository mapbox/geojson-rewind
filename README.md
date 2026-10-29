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

Pull Requests merged to `main` with conventional commit prefixes are automatically published to npm by the `NPM release` GitHub Actions workflow, as new major/minor/patch versions (`feat!:`/`feat:`/`fix:` respectively). When using "Squash and merge", ensure your PR title includes the conventional commit prefix; a `BREAKING CHANGE:` footer only counts if it ends up in the squash commit's body. Other prefixes (`chore:`, `docs:`, etc.) or no prefix don't trigger a release.

Examples:
- `fix: resolved issue with dropdowns` -> patch
- `feat: added dropdowns` -> minor
- `feat!: Overhauled dropdowns` (requires manual migration work) -> major

The workflow publishes via [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/) (OIDC), so no npm token is needed. This requires an npm org admin to configure a trusted publisher for `@mapbox/geojson-rewind` (GitHub Actions, workflow `npm-release.yml`, environment `npm-release`), and the `npm-release` GitHub Environment to exist in this repository. After publishing, the workflow creates a GitHub Release with generated notes and comments the released version on the merged PRs.

`package.json`'s `version` may be incremented manually if needed (for example, to skip a minor version), but you shouldn't normally need to touch it; the published npm version, not `package.json`, is the source of truth for what gets released next.

### Pre-release versions on other branches

For testing in downstream projects, you can manually trigger the "NPM release" workflow on a branch to publish a pre-release tagged with the short commit sha (e.g. `0.5.2-aa79c6a`) under the npm `prerelease` dist-tag, without affecting `latest`. Check the workflow results for the published version.
