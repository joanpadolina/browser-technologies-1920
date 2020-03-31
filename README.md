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
1. [Concept(wiki)](https://github.com/joanpadolina/browser-technologies-1920/wiki/Concept-case-2:-T-shirt-Design)
1. [Layers(wiki)](https://github.com/joanpadolina/browser-technologies-1920/wiki/Layering)
1. [Support(wiki)](https://github.com/joanpadolina/browser-technologies-1920/wiki/Support)
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
