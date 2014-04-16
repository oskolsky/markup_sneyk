# Getting started

Chemistry Template has 2 simple ways to get started:

1. [Download](https://github.com/chemistry-template/chemistry-template/archive/master.zip) .zip archive and extract its contents into your working directory;

2. Or clone GitHub repository:
  ```
  git clone git@github.com:chemistry-template/chemistry-template.git working_directory
  cd working_directory
  rm -rf .git
  ```

Note that Chemistry Template is written on HAML/SASS and that's why by default it offers you build support via [Gulp](http://gulpjs.com/) with pre-configured [gulpfile.js](https://github.com/chemistry-template/chemistry-template/blob/master/gulpfile.js) and all nessessary [plugins](https://github.com/chemistry-template/chemistry-template/blob/master/package.json) to start working immediately.

But before than you have to:

1. Install [node.js](http://nodejs.org/);

2. Go to your working directory and:

  1. Run:
    ```
    npm install
    ```
    to install all required Gulp plugins;

  2. Run:
    ```
    gulp development
    ```
    to pre-build your project into working_directory/build;

  3. Run:
    ```
    gulp
    ```
    to start HTTP server and watch your working directory tree.
