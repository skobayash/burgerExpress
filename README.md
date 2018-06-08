# burgerExpress

## Overview
burgerExpress is a burger logger where users can input the names of the burgers they intend to make and eat. The app uses a MySQL database, Node.js, Express, Handlebars and a homemade ORM.

## Installation
### Clone to your local repository
To clone burgerExpress to your local repository, enter the following in your terminal/bash window:
``` git clone https://github.com/skobayash/burgerExpress.git ```
### Install dependencies
Install the following dependencies for burgerExpress:
* body-parser
* express
* mysql
* express-handlebars

``` npm install ```
### Initialize
#### Local server:
* To run on a local server, navigate to your local burgerExpress repository in your terminal/bash window and enter the following: ``` node server.js ```
* In your preferred browser, naviate to PORT 3000 by typing the following in your url bar: http://localhost:3000

#### OR Heroku:
* A live version of burgerExpress can be found at: https://salty-chamber-79009.herokuapp.com/

## How It Works
Upon opening burgerExpress, users will be able to enter information about the burgers they would like to make and then eat. 
1. Under the "Make a new burger" section at the bottom of the page, users can type in a name or type of burger and click the "Add Burger" button to submit.
2. The burger will then appear under "Undevoured" with a button that gives them the option to "DEVOUR" it.
3. By clicking on "DEVOUR", the burger will be removed from the "Undevoured" section and appear under the "Devoured" section. 
4. The user will then have the option to make the burger again ("MAKE AGAIN") or delete it ("DELETE"). 
- Hitting "MAKE AGAIN" will create an instance of the same type of burger which will undevoured while preserving the original devoured burger.
- Hitting "DELETE" will delete the selected burger from the page and database.
