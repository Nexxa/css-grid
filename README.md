# css-grid

CSS Responsive Grid system.

It is based on [960 Grid System](http://960.gs/), [Bootstrap grid system](http://getbootstrap.com/) and [Responsive Grid System](http://www.responsivegridsystem.com/).

It was designed as a pluggable module, so you can use it in your workflow/stack as you most prefer.<br/>
It is also available as Bower package.

## Build

The module's sources are written in [LESS](http://lesscss.org/), with its own variables and mixins, so it should be easy override the base configuration.

[Gulp](http://gulpjs.com/) builds all the sources and prepares them for release.

## How it works

The layout is divided in rows and columns.

The `.row` css class splits the page horizontally and solves floating issues.

The `.col` css class divedes the row in columns. The size of the column is specified by adding a `.span-*` css class.<br/>
Default columns number is **12**, but you can change it in the variables file.
You can also move columns to the right using the `.offset-*` classes.

The `.container` css class wraps all your rows and columns and set the width of the container.

Through `@media` queries the grid system is fully responsive and mobile first.<br/>
There are 4 breakpoints:

- screens at least 992px wide: standard 960 grid;  
- screens at least 768px wide: 78% circa of the standard 960 grid;
- screens at least 480px wide: width 100% for columns greater than half the grid, 50% for the other;
- screens lesser than 480px wide (mobile-first): width 100% for all columns.

Furthermore, you can use `.row-fluid` css class in order to have a fluid layout.

### Examples

**Standard:**

    <div class="container">
      <div class="row">
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
        <div class="col span-1">span-1</div>
      </div>
      <div class="row">
        <div class="col span-2">span-2</div>
        <div class="col span-2">span-2</div>
        <div class="col span-2">span-2</div>
        <div class="col span-2">span-2</div>
        <div class="col span-2">span-2</div>
        <div class="col span-2">span-2</div>
        <div class="col span-2">span-2</div>
      </div>
      <div class="row">
        <div class="col span-3">span-3</div>
        <div class="col span-3">span-3</div>
        <div class="col span-3">span-3</div>
        <div class="col span-3">span-3</div>
      </div>
      <div class="row">
        <div class="col span-4">span-4</div>
        <div class="col span-4">span-4</div>
        <div class="col span-4">span-4</div>
      </div>
      <div class="row">
        <div class="col span-6">span-6</div>
        <div class="col span-6">span-6</div>
      </div>
      <div class="row">
        <div class="col span-12">span-12</div>
      </div>
    </div>

**Offset:**

    <div class="container">
      <div class="row">
        <div class="col span-4">span-4</div>
        <div class="col span-4 offset-4">span-4 offset-4</div>
      </div>
      <div class="row">
        <div class="col span-2">span-2</div>
        <div class="col span-5">span-5</div>
        <div class="col span-2 offset-2">span-2 offset-2</div>
        <div class="col span-1">span-1</div>
      </div>
    </div>

**Fluid:**

    <div class="container">
      <div class="row-fluid">
        <div class="col span-6">
          span-6
          
          <div class="row-fluid">
            <div class="col span-4">child span 4</div>
            <div class="col span-4">child span 4</div>
            <div class="col span-4">child span 4</div>
          </div>
        </div>
        <div class="col span-6">
          span-6
          
          <div class="row-fluid">
            <div class="col span-3">child span 3</div>
            <div class="col span-3">child span 3</div>
            <div class="col span-3">child span 3</div>
            <div class="col span-3">child span 3</div>
          </div>
        </div>
      </div>
    </div>

## Resources

- [LESS](http://lesscss.org)
- [960 Grid System](http://960.gs/)
- [Bootstrap grid system](http://getbootstrap.com/)
- [Responsive Grid System](http://www.responsivegridsystem.com/)
