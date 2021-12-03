# myBlog

The Aim of this Project was to get familiar with Node.js and mongodb.

## Librarires/Modules/Framework Used

1. express
2. mongoose
3. slugify
4. marked
5. dompurify
6. JSDOM

## Module Details

### 1. Express : 
    It is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.

### 2. Mongoose :
    Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework.

### 3. Slugify :
    A slug is a human-readable, unique identifier, used to identify a resource instead of a less human-readable identifier like an id. So I have used this to have a much readable id shown in address bar (eg: http://${DNS}/articles/${slugName}).

### 4. Marked : 
    It is used to convert the input string into HTML code.

### 5. DomPurify : 
    DOMPurify sanitizes HTML and prevents XSS attacks. You can feed DOMPurify with string full of dirty HTML and it will return a string (unless configured otherwise) with clean HTML. DOMPurify will strip out everything that contains dangerous HTML and thereby prevent XSS attacks and other nastiness.

### 6. JSDOM : 
    JSDOM is a library which parses and interacts with assembled HTML just like a browser.