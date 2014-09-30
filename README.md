AngularJS / Bootstrap floating labels
=========================

Changed this little snippet to be an angularJS Directive.

A new placeholder UI design for Bootstrap forms.
Inspired by Mark D. Smith's
[Dribbble post](http://dribbble.com/shots/1254439--GIF-Mobile-Form-Interaction?list=users)
and @jverdi's [JVFloatLabeledTextField](https://github.com/jverdi/JVFloatLabeledTextField).

Bootstrap implementation by: [fauxparse](https://github.com/fauxparse/bootstrap-floating-labels)

[DEMO](http://jsfiddle.net/5mj4s4d7/3/)


Requirements
------------
* AngularJS (tested with 1.2.1)
* Bootstrap 3.0
* jQuery 1.10.x or later
* Taste

Usage
-----
* Add the directive in `floating-labels.js` to your angular Project.
* Place the `inline-label` attribute on any input you want the floating label

Options
-----
You can adjust the placement with the `pos` attribute (pos="top"). Available are top (default), bottom, left, right.

Todo
-----
* Remove jquery Selectors
