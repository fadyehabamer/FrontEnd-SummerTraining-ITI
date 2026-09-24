# FrontEnd Summer Training August-2021
### This Repo will contain all tasks taken in ITI FrontEnd Summer Training 
> For sure there are best ways to write better code for given tasks , but the challenge is to make the same as layout with given tools and not use advanced tools 

<br>

### Training Content

* Day 01
  * How Internet works ?
  * HTML History
  * HTML Tags 

<hr>

* Day 02
  * Img tag
    * maps in img
  * Tables
  * Links
  * Forms

<hr>

* Day 03
  * Intro to CSS2
  * Some CSS2 Properties
    * color , font , border , margin , padding 
    * display ( inline-block )  for making layouts 

<hr>

* Day 04
  * Intro to javascript
  * History of javascript
  * ECMA5
  * Variables , Functions , Conditions , Loops
  * Hoisting
     - For both variables , functions

<hr>


* Day 05
  * cont. in javascript
  * scooping
  * string
    * string built in functions
  * math
  * date


<hr>

* Day 06
  * cont. in javascript
  * Array
  * Array built in methods
    * pop , push , shift , unshift
    * filter
    * every , some
    * join , concat
    * sort
  
<hr>

* Day 07
  * cont. in javascript
  * What is DOM ?
  * Dom Manipulation
  * Dom selectors

<hr>

* Day 08
  * cont. in javascript
  * Dom manipulations
  * Dom selectors
  * Events

<hr>

* Day 09
  * cont. in javascript
  * cont. in Dom Events
  * javascript OOP

<hr>

* Day 10
  * Intro to Jquery
  * Why Jquery?
  * Jquery selectors
  * Some built in functions
      * show()
      * hide()
      * addClass()
      * removeClass()
      * toggleClass()


<hr>

* Day 11
  * cont. in jquery
  * how to bind events with jquery functions
      * .bind() , .delegate()  [deprecated]
      * .on()
  * delegation
  * bubbling
     * .stopPropagation
  * ui effect fuctions
     * animation function

<hr>

* Day 12
    * cont. in jquery
        * Traversing
          * .parent , .parents
          * .next , .nextAll
          * .prev ,.prevAll
          * .children
          * .is , .map , .find
          * .attr


    * Jquery UI

    * ECMA Script 6
        * Arrow Functions
        * Spread & Rest operators
        * Template literal

<hr>

* Day 13
    * cont. in ES6
    * Object with ES6
    * factory function => JS design pattern
    * consice function
    * Class in ES6..
         * constructor()
         * inhertance
         * super()
         * ES6 modules
             * import
             * export
<hr>

* Day 14
  * Intro to React
  * How to create React Enviroment
  * JSX
     * javascript embeded html
  * Function Components
  * Built a Simple layout using Function components

<hr>

* Day 15
    * cont. in React
    * conditional Rendering
    * class component
    * CRUD operations using react
<hr>

* Day 16
  * cont. in react
  * React Router
  * CRUD operations using React-Router

<hr>

* Day 17
  * Cont. in React
  * importing Bootstrap
  * importing other UI Libraries
    - Material UI , Anti UI
  * Dealing with Api
    - using Axios , Fetch

<hr>

* Day 18
  * Cont. in React
  * create Fake Server 
  * Deal with data in a Crud React App
    * using axios
    * | Command | Axios Method | Parameter |
      |---------|--------------|-----------|
      | Delete  | delete       | ID        |
      | Edit    | put          | Object + ID |
      | Add     | post         |             |


<hr>

* Day 19
  * Bootstrap4
  * Grid system 
  * Typography 
  * buttons
  * badges
  * Pagination 
  * progress bars 
  
<hr>

* Day 20
  * [Graduation Project](https://github.com/fadyehabamer/Ecommerce-Reactjs-Website)
  * Duration : 2 weeks
  * Done in : 6 Days - 9 hours/day

<hr>

<h1 align="center">
  End of Training 🤓
</h1>

<br>

## How to run the labs

There is no build step for Days 01–12. Open the `.html` file of a lab in a browser. Most JavaScript labs (Days 04–06, 09, 12) print their results to the browser console (F12), and some ask for input with `prompt()`.

**Day 13 (ES6 modules):** `<script type="module">` does not work from `file://`, so serve the folder:

```bash
cd "Day #13"
python3 -m http.server 8000   # then open http://localhost:8000 and check the console
```

**Days 14–17 (React, Create React App):**

```bash
cd "Day #16"                  # or "Day #14/Lab 14", "Day #15/CRUD", "Day #17/CRUD using Router & Bootstrap"
npm install
npm start
```

**Day 18 (React + json-server fake API):** start the API first. It serves `db.json` on port 3000, which the React app calls at `http://localhost:3000/Employees`:

```bash
cd "Day #18/FakeApiServer app" && npm install && npm run json:server
# in a second terminal
cd "Day #18/react-fakeapi" && npm install && npm start   # answer "yes" to run on another port (3001)
```
