# Vanilla JavaScript TodoMVC Example with some modifications for using RequireJS
Licence MIT




Optimize:
Use r.js, download or use the one installed in node_modules/requirejs/bin/r.js

node r.js -o build.js

<script data-main="js/main" src="js/lib/require.js"></script>

<script data-main="js/main.min" src="js/lib/require.js"></script>


Changing underscore for hogan using requirejs plugins:
  Add Hogan lib.
  Add text and hgn plugins.
  
  Create a template to load.
  Update configuration.

  Fix the crappy Object.prototype.each addition.
  Improve the view component.