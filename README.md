# Quote
Sample Node.js app which serves up a random quote using the api from http://forismatic.com/en/api/.

## Requirements
This app assumes you already have Node.js installed and working on your local machine. If you are on Mac, you can use homebrew and nvm to get up and running quickly:

1. Install homebrew by visiting https://brew.sh in your browser and following the instructions there.
1. Install NVM: `brew install nvm` (be sure to follow the instructions after install is complete).
2. Install latest LTS version of Node: `nvm install --lts`
3. Use the version of Node you just installed: `nvm use --lts`

Install packages for Linux, Mac, and Windows can also be found on the main Node web site [here](https://nodejs.org/en/download/).

## Installation
1. Clone the repo to your local machine.
2. CD into the app directory and run `npm install` (e.g. `cd quotes && npm install`).
3. Start it up!: `DEBUG=quotes:* npm start`
4. Visit http://localhost:3000 in your web browser to view the app.

## Reference
The following tools were used in the creation of this app:

* Homebrew - https://brew.sh/
* Node.js - https://nodejs.org/en/
* NVM - https://github.com/creationix/nvm/blob/master/README.md
* Express - https://expressjs.com/
* Express Application Generator - https://expressjs.com/en/starter/generator.html
