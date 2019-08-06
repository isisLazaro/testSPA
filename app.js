"use strict";

import Navbar from './modules/navbar.js'

import Home     from './modules/home.js'
import Register from './modules/register.js'
import Error404 from './modules/error.js'

import Utils from './modules/utils.js'

// List of supported routes. 
// Any url other than these routes will throw a 404 error
const routes = {
    '/'         : Home,
    '/register' : Register
};

// Router takes a URL, checks against the list of supported routes and then renders the corresponding content page
const router = async () => { // function always returns a promise
    // load view element
    const header = null || document.getElementById('header-container');
    const content = null || document.getElementById('page-container');
    
    // Render the header of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    
    // Get the page from the hash of supported routes.
    let request = Utils.parseRequestURL()
    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);