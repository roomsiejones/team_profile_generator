const fs = require('fs');

class HTMLCreate {
    constructor() {}

    // down here we will be building each card individually







    renderHtml(renderedCards) {
        return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Employee Profiles</title>
    </head>
    <body>
      <div>
        <h1>My Team</h1>
      </div>
      <div>
        ${renderedCards}
      </div>
    </body>
    </html>
        `;
      }
}

module.exports = HTMLCreate;