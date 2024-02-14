# URL Shortener App

This is a simple URL shortener application built with Express.js, Mongoose, EJS, and Shortid.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Introduction

URL shortening is a technique in which a long URL is given a short alias to redirect to the original URL. This application provides a web interface where users can shorten long URLs to manageable short URLs.

## Features

- Shorten long URLs to short aliases.
- Redirect from short URLs to the original long URLs.
- Track the number of clicks on each shortened URL.

## Installation

1. **Clone the repository:**

   ```bash
    git clone https://github.com/Chakravarthy-E/url-shortener.git

## Usage

   ```bash
    cd url-shortener
    npm install

**Start the server:**

  ```bash
    Copy code
    npm start

Open your web browser and navigate to http://localhost:5000.
Enter a long URL into the input field and click "Shrink" to generate a short URL.
Copy the generated short URL and use it to redirect to the original long URL.



## Technologies Used
-Express.js: Web application framework for Node.js.
-Mongoose: MongoDB object modeling tool.
-EJS: Embedded JavaScript templates for generating HTML markup.
-Shortid: Library for generating unique short IDs.

