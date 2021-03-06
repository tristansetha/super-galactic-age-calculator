# super-galactic-age-calculator

By Tristan Setha 03/22/19

## Description
A website that determines your age based on a planet's solar years.

## Setup/Installation Requirements

### To Clone:
Open terminal and $ cd into preferred destination of clone
and run the command:
```
$ git clone https://github.com/tristansetha/super-galactic-age-calculator
```
Navigate into the super-galactic-age-calculator directory
```
$ cd super-galactic-age-calculator
```
### To edit: 
Open entire directory in preferred text editor

### Setup:
(Installing Node through homebrew)
If you do not wish to install node through the command line via home brew skip this step.
Download and install home brew by running the command in the home directory: 
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
```
$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
```
Install node by running the command:
```
$ brew install node
```

Go to the super-galactic-age-calculator project directory and use commands:
```
$ npm install
```
```
$ npm run build
```
If all else fails (Reinstall webpack) by running these commands:
```
$ npm install webpack@4.0.1 --save-dev
$ npm install webpack-dev-server@3.1.0 --save-dev
AND THEN 
$ npm run build
```

### To run tests:
Update date-spec.js and
Use command
```
$ npm run test
```

## Specs

|   Behavior                          | Input Example | Output Example |
| ------------------------------------|:-------------:| :-------------:|
| User chooses planet | click drop down menu |   |
| User enters age | types in age |  |
| User submits | click button | |
| User chooses Mercury | | |
| User chooses Venus |  |  | 
| User chooses Mars | | |
| User chooses Jupiter |  | |
| User chooses any planet, enters age | Mercury, 25 | 107 years old, life expenctancy: xx |
| User chooses planet, enters average life expenctancy on earth | Mercury, (Earth life expenctancy) | (Mercury life expenctancy) |

## Sources

https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy


## Technologies Used

Javascript, Node, Webpack, Karma, Jasmine, HTML, CSS, Git, Visual Studio code

ask me anything!!! tristansetha@gmail.com

MIT

Copyright (c) 2019 Tristan Setha