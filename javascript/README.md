# Javascript

## Stats

- Compiles at runtime with js-engines Ex, nodejs,v8,spidermonkey using [jit compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation)
- Supports event-driven, functional, and imperative programming styles.
- Weakly, Dynamically typed, and Prototype-based OOP
- Used mostly in client-side for interactivity, but nodeJS makes it possible for servers as well
- Uses curly braces, Similar to C-syntax

## Pre-requisites

- [Node.js](https:nodejs.org) >= v13.0.0
- [Mocha](https://mochajs.org)
- (if you're on windows)[Git Bash](https://git-scm.com/download/win)

# Installation

## Download and install node

Note: _This is the current version of node_

- [Windows](https://nodejs.org/dist/v14.4.0/node-v14.4.0-x64.msi)
  - Run the installer

- [Mac](https://nodejs.org/dist/v14.4.0/node-v14.4.0.pkg)
  - `brew install node`

- [Linux](https://nodejs.org/dist/v14.4.0/node-v14.4.0-linux-x64.tar.xz)
  - `sudo apt install nodejs`

### Test to see if you've successfully installed node and npm

In your Terminal,

```bash
$ node -v
```

Outputs Something like : `$ v14.0.0`

```bash
$ npm -v
```

Output : `6.0.0`

### Install mocha using npm

```bash
$ npm -g mocha
```

Test the installation of mocha

```bash
$ mocha -v
```

We are now done with the installation,
Let's now begin our first exercise and test to see if everything works fine

Look for returnme.js in js/exercise/basics
and solve the problem.

Then, in your Terminal,

```bash
mocha ./exercise/basics/test/returnme.js
```

> Read the readme file in the directory exercise for a more detailed instruction
