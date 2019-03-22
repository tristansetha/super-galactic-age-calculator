# super-galactic-age-calculator

By Tristan Setha 03/22/19

## Description
A website that determines your age based on a planet's solar years.

## Setup/Installation Requirements

### To Clone:
<br/>Download .NET Core 1.1.4 SDK and .NET Core Runtime 1.1.2 and install them. Download Mono and install it.
<br/>Open terminal and $ cd into preferred destination of clone
<br/>Run the command:
```
$ git clone https://github.com/tristansetha/super-galactic-age-calculator
```
<br/>Navigate into the super-galactic-age-calculator directory
```
$ cd super-galactic-age-calculator
```
### To edit: 
<br/>open entire directory in preffered text editor

### Setup:
<br/>Download and install home brew: 
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
<br/>ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
```
$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
```
<br/> Install node
```
$ brew install node
```
### To run tests:

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


## Technologies Used

Javascript, Node, Webpack, Karma, Jasmine, HTML, CSS, Git, Visual Studio code

ask me anything!!! tristansetha@gmail.com

MIT

Copyright (c) 2019 Tristan Setha