# node-gm-bin [![Build Status](https://secure.travis-ci.org/yuanyan/node-gm-bin.png?branch=master)](http://travis-ci.org/yuanyan/node-gm-bin)

[GraphicsMagick](http://www.graphicsmagick.org/) Node.js wrapper that makes it seamlessly available as a local dependency on OS X, Linux and Windows.

## Example usage

```js
var execFile = require('child_process').execFile;
var binPath = require('gm-bin').path;

execFile(binPath, 'composite -compose CopyGreen green.png red.png red-green.png'.split(/\s+/), function(err, stdout, stderr) {
    // balabala...
});
```

You can also run it directly from `./node_modules/.bin/gm-bin`

## GraphicsMagick Utilities

<p>GraphicsMagick provides a powerful command line utility <cite>gm</cite>, which
may be used to access all GraphicsMagick functions. Gm uses a
consistent set of options (<a class="reference external" href="http://www.graphicsmagick.org/GraphicsMagick.html">see options documentation</a>).  GraphicsMagick provides access to major
commands via a single executable command-line program; for example, to
use the "convert" sub-command, type <tt class="docutils literal">gm convert ...</tt>. The available
commands are as follows:</p>

<table border="1" class="docutils">
<colgroup>
<col width="17%">
<col width="83%">
</colgroup>
<tbody valign="top">
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/animate.html">animate</a></td>
<td>Animate a sequence of images</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/batch.html">batch</a></td>
<td>Executes an arbitary number of utility commands</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/benchmark.html">benchmark</a></td>
<td>Measure and report utility command performance.</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/compare.html">compare</a></td>
<td>Compare two images using statistics and/or visual differencing</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/composite.html">composite</a></td>
<td>Composite images together</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/conjure.html">conjure</a></td>
<td>Execute a Magick Scripting Language (MSL) XML script</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/convert.html">convert</a></td>
<td>Convert an image or sequence of images</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/display.html">display</a></td>
<td>Display an image on a workstation running X</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/identify.html">identify</a></td>
<td>Describe an image or image sequence</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/import.html">import</a></td>
<td>Capture an application or X server screen</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/mogrify.html">mogrify</a></td>
<td>Transform an image or sequence of images</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/montage.html">montage</a></td>
<td>Create a composite image (in a grid) from separate images</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/time.html">time</a></td>
<td>Time the execution of a utility command.</td>
</tr>
<tr><td><a class="reference external" href="http://www.graphicsmagick.org/version.html">version</a></td>
<td>Report GraphicsMagick version, features, and build options.</td>
</tr>
</tbody>
</table>

## License

MIT
