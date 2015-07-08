![itman70s](favicon.ico) bootstrap3-richtext
===================
Tiny bootstrap-compatible WISWYG rich text editor based on bootstrap3 and bootstrap-wysiwyg, makes it easy to create simple and beautiful wysiwyg editors. 
Here are the key features:
* Automatically binds standard hotkeys for common operations on Mac and Windows
* Drag and drop files to insert images, support image upload (also taking photos on mobile devices)
* Allows a custom built toolbar, no magic markup generators, enabling the web site to use all the goodness of Bootstrap, Font Awesome and so on...
* Uses standard browser features, no magic non-standard code, toolbar and keyboard configurable to execute any supported [browser command]

Usage
-----------
* Rich Input
``` javascript
 // Add divinput as class of input to enable it accept rich text.
 <input type='text' class="divinput" name='simpleinput' value='' placeholder="A sample for simple rich input "> 
``` 
* Rich Text line
``` javascript
 // Add richtext as class of input to enable it accept rich text.
<input type='text' class="richtext form-control" name='richtl' value='' placeholder="A sample for simple rich input ">
``` 
* Rich Text
``` javascript
 // Add richtext as class of textarea to enable it accept rich text.
  <textarea class='richtext' name='richt' cols=100 rows=4 title="A sample for simple rich text"> </textarea>
``` 
* Rich Text in line with source code
``` javascript
 // Add richtextcode as class of input to enable it accept rich text.
 <input type='text' class="richtextcode col-md-12" name='richtcl' value='' placeholder="A sample for simple rich input ">
``` 
* Rich Text with source code
``` javascript
 // Add richtextcode as class of textarea to enable it accept rich text.
 <textarea class='richtextcode col-md-12' name='richtc' cols=100 rows=4 title="A sample for simple rich text"> </textarea>
``` 
	
* JS/CSS files required
``` javascript 
    <link rel='stylesheet' href='./css/bootstrap.min.css' />
    <link rel="stylesheet" href="./css/bootstrap-theme.min.css">
    <link rel='stylesheet' href='./css/font-awesome.min.css' />
    <!--[if IE 7]>
    <link rel="stylesheet" href="./css/font-awesome-ie7.min.css">
    <![endif]-->
    
    <link rel='stylesheet' href='./css/style.css' />
    <script src="./js/jquery.js"></script>
    <script src="./js/jquery.hotkeys.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/bootstrap-richtext.js"></script>
``` 
Dependencies
------------
* jQuery http://jquery.com/
* jQuery HotKeys https://github.com/jeresig/jquery.hotkeys
* Bootstrap http://twitter.github.com/bootstrap/
* Font Awesome http://fontawesome.io
