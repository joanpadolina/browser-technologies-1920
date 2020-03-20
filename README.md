# Browser Technologies

# Introduction

In this course there is a lot of research about how the browser respond to design we create for the users. It's a process that everyone knows but no one implements it in the their designs. We tend to loose focus for the feature you are building but in the end we don't know which devices it is gonna be viewed on.

# Table of contents [WIKI]

## Research 🔍 
1. [Introduction](#introduction) [wiki]
1. [Features research](https://github.com/joanpadolina/browser-technologies-1920/wiki/Features) [wiki]
1. [Three devices](https://github.com/joanpadolina/browser-technologies-1920/wiki/Three-devices) [wiki]
1. [Different browsers and reader](https://github.com/joanpadolina/browser-technologies-1920/wiki/Different-Browser) [wiki]

## Project 🎨 
1. [Concept case: 2 T-shirt](https://github.com/joanpadolina/browser-technologies-1920/wiki/Concept-case-2:-T-shirt-Design) [wiki]
1. [Installation](#installation) 
1. [Data](#data)
1. [Main feaure research](#feature-research)
1. [Layers](#layers)
1. [Tools](#tools)
1. [Feedback request](#feedback-request)
1. [Credits](#credits)

<img src="readme assets/sketch 1.jpeg">

## Installation


This project uses __[MongoDB](https://www.mongodb.com/)__ so make sure you have an account setup.



__clone repository__
```
git clone https://github.com/joanpadolina/browser-technologies-1920.git
```

__npm install__

```
npm i
```

__.env__

```env
DB_URL=mongodb+srv://DB_USER:DB_PASS@<your_link>.mongodb.net/browsertech
DB_PORT=27017
DB_NAME= <database name>
DB_HOST=localhost
DB_USER= <admin namen>
DB_PASS= <password>
```

__start server__
```
npm run start 
```
or

__start server with nodemon__
```
npm run dev
```

## Data

Data structure in mongodb example.

```json
_id: 5e73db1d7a5ea9fa90421b7d
pin: 7343
gender: "Men"
text: "text here"
colorshirt: "Yellow"
colortext: "Black"
type: "Long-sleeve"

```
## Feature research

This case is mainly interactive trough a form. Users can customize their shirt by adding text or selecting different colors.

The following list are things used for the application to work with or without javascript. With some research on compatibility.

[list comes here]
__CSS__

* @print 
* :Psuedo classes


__Javascript__


# Layers


## HTML-only

*first test, for the sketches please read it in the [wiki](https://github.com/joanpadolina/browser-technologies-1920/wiki/Concept-case-2:-T-shirt-Design)* 

__Form Post__
In the first layer the focus was mainly on making the form work. This has been possible through rendering it server-sided. The data would then be added to a database, in this case to Mongo DB.

<img src="readme assets/screens/html_mongodb.gif">

__Update__
In the first setup the data is sent but also render with a templating tool. In the second screen user can interact with their data by updating if necessary.

__Search__
Lastly, when the user, for whatever reason, cannot proceed to print there is an option to retrieve data the have sended. The form adds an extra code which gives the user an unique **id** which they layer can fill in the searchbar. This way they are able to customize, save and print their desired shirt.

## Tools

* EJS
* Express
* Nodejs
* Generate-unique-id
* MongoDB (Compass)

## Feedback request


* Read Me

What are the most important things to include in the read me?

* How do you begin with researching your feature

I've been stuck with this subject because I focused on a working form which took more time then need. What is the best way to not get demotivated for this project. 

* WIKI

I'm not sure which content are important in the wiki? 


## Credits
* [Menno](https://github.com/Mennauu) // explained creating a json file through a server
* [Lien](https://github.com/nlvo) // mongodb guidance
