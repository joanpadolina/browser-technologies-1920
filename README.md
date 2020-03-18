# Browser Technologies

# Table of contents
1. [Introduction](#introduction)
1. [Features research](#features)
1. [Three devices](#three-devices)
1. [Different browsers](#different-browsers)
1. [Reader](#reader)


# Introduction

In this course there is a lot of research about how the browser respond to design we create for the users. It's a process that everyone knows but no one implements it in the their designs. We tend to loose focus for the feature you are building but in the end we don't know which devices it is gonna be viewed on.


# Features

1. Image turned of
1. Custom fonts 
1. Color and Colorblindness
1. Mouse and trackpad
1. Slow internet
1. Javascript turned of
1. Cookies and Local storage turned of

## Feature individual research

### Custom fonts 

* Search the problems

https://css-tricks.com/preventing-the-performance-hit-from-custom-fonts/
 
In the arcticle provided by CSS-tricks they mention that, if a site uses a lot custom fonts, it will load slower. Because it need to be loaded by another library.

 
https://blog.logrocket.com/how-to-use-web-fonts-in-css-a0326f4d6a4d/

Also in this article they mention the more fonts the slower the performce it shall be. But to make your site more recognizable you can use some default fonts like "Roboto".

If a website is using icon fonts this will also be turned of.

 
* How can you test it

To test the custom fonts you can delete the font-family in the inspector.
 
* Find a website with this

There is no significant changes if it's turned of. The website like instagram or facebook will have the default font. But when you use an icon font, this to will dissapear.

* How to solve this

The icon can be an svg or just plain png. Here you won't risk losing the icon if the font is disabled.



### Javascript

* Search the problems
 
https://www.searchenginepeople.com/blog/stats-no-javascript.html 

Aresearch in 2010 showed how many users has turned of javascript whilst visiting the populair website Yahoo!. The website has been visited by many people and the donut diagram shows that only 2% has javascript turn of.

<img src="./readme%20assets/yahoo.png">

This would be 200 out of 10.000 visitors. So you'll wonder if it's worth changing for that group of people and why would you change it?
The only thing they are missing are some interaction or functionalities.
 
 
https://gds.blog.gov.uk/2013/10/21/how-many-people-are-missing-out-on-javascript-enhancement/
 

<img src="./readme%20assets/ukscreen.png">

An article from UK is actualy almost the same as from the article of 2010. The only difference is the year. This one is released on 2013.

1.1% is 1 out of 93 people from the UK.
 
 
* How to test this

The feature can be turned of using Web Dev tools in chrome. This is a plugin from chrome.

<!-- 
Deze features heb ik uitgezet door de chrome web dev plugin te downloaden en bepaalde css of js elementen uit te zetten.
De feature kan ook niks zonder internet en is dus niet toegankelijk als je slechte verbinding heb. -->
 
* Website without javascript

<img src="./readme%20assets/weer.png">
<img src="./readme%20assets/weer2.png">

www.weer.nl

Weather api is being loaded through javascript. If javascript is turned of a lot of information is denied or not loaded. Also images won't load anymore. The downside is mainly of not knowing what weather it will be and where.

* How to fix

Might want to render this api server sided.
I've tested the same with my WAFS assignment and by turning the the javascript of only the client side won't load anymore.


# Three devices

<img src="./readme%20assets/pic.jpg">
<img src="./readme%20assets/pic1.jpg">

## iPod

```
//whichbrowser.net

- Safari
- ios 6.1.6
- Mozilla/5.0 (Ipod, CPU OS 6_1_6 like Mac OS X)
- AppleWebkit/536.26 (KHTML, like Gecko)
- Version/6.0 Mobile/10B500 Safari/8536.25
```

The OBA webapp for childrens has no functionalities if browsing through an old iPod. There is no Javascript enabled so images and content wouldn't load. The API is therefor not usable via an ipod. 
The form however is being loaded but the next page wont load. There is a lot of javascript going on and this will not work. 
The input search has an auto zoom if clicked. This will make everything a lot bigger.

**Tips and Tricks**

Because the oba app depends on Javascript the page won't render any data. This because of the new method of fetching through Javascript. Some older browser don't detect newer methods. A work-a-round of this problem can be to fetch the api through the server. So the data can be rendered clientside.

For the css it's probably the same problem. The key here is to use semantic html to give the user atleast the feedback they expect. So if for the forms, show it underneath easy fieldset and don't create javascript activated keys as a progressive disclosures. 



## iPad mini

```
//whichbrowser.net

- Safari
- ios 9.3.5
- Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X)
- AppleWebkit/601.1.46 (KHTML, like Gecko)
- Version/9.0 Mobile/13g36 Safari/601.1

```

The ipad mini will load the css but no javascript. So the API won't work because of the fetch. The form has more styling than the ipod but to make an assignment through the app is also not possible.


## LG Nexus

```
//whichbrowser.net

- Chrome 75
- android 6.0.1
- Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5)
- AppleWebkit/537.36 (KHTML, like Gecko)
- Chrome/75.0.3770.143 Mobile Safari/537.36

```

The LG is the most recent device so everything will work including the css styling and the javascript.
Data is working and the search through the api is also enabled.

# Different browsers

## Chrome

The Basic styling and javascript is working there is no difference in the height of the forms. Other browser will show different styling like safari and brave.


### Image turned of

When image is disabled the structure of the webapp remains stable. There is no difference in the skeleton so this is a good thing. Because the image has a set of width and height the structure is untouched.

<img src="./readme%20assets/img%20off.png">

The only downside of removing te image is of the ALT tag that is not there. This is a important thing to remember for upcomming assignments.

### Custom fonts 
The app has only one font and this a basic font that every os knows. Which makes the app fast and durable. When turned off there will be no big difference only the fallback of the browser will be shown.


### Color and Colorblindness
<img src="./readme%20assets/colortest1.png">
<img src="./readme%20assets/color2.png">

When testing for color blindness there is no big difference in the contrast. Maybe the search button is a little to dark for some. But this depends on the eyesight it self. For the form it is still readable and you know the difference between the first and the last page.

This test is done through the browser with [Colorblind test]('https://www.toptal.com/designers/colorfilter/').

### Mouse and trackpad

I came accros a problem while trying to navigate through the webapp with only the keyboard. Both engine wont let me go to the content and bring me straight back to the browser url.
*seen below*

<img src="./readme%20assets/firefoxtabs.gif">

<hr>

**The goal was to be able to read the content and **Brave** did the job which firefox couldn't.**

<img src="./readme%20assets/bravekeys.gif">

When you reached the form page you can only navigate on the first page. The second behind it won't work because of the animation that is set on an element. This can be updated to put a button that says next page. 


**Possible solutions** 

Because of this problem it't not clear but after research I found out it's a Mac os kind of thing. The following links show you how to activate the tab option through websites.
[Firefox MacOS tab navigation](https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox/11713537)


### Slow internet

The API of the Oba doesn't change when the internet slows down. The data will be loaded at a slower rate but you get content relatively fast even on the lowest 3g mode.


### Javascript turned of

<img src="./readme%20assets/withoutjs.png">

The page without javascript is just a page with a background image. The main data fetch is turned of so the data wont be loaded. 

The form is also activated with javascript navigate to the next page. This is not available after switching to js and no js.

To avoid this is, server side rendering is an option you can use.

### Cookies and Local storage turned of

The app uses local storage for making a paperwork. So the form that is filled in will be rendered to a template. And is pretty useless without javascript.

**Possible Solutions**

Create an eviroment where the user can save it server-sided. So its available on every device.


# Reader

When reading the website the voice won't end. The shortcut to stop was hard to find. When the reader is turned on via Mac OS it will also read the notification form slack. Wich is a lot information at once
