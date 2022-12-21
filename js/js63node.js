// console.log("Hellow World");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Box text shadow</title>
      <style>
          /* box-shadow:offset-x offset-y color */
          /* box-shadow:offset-x offset-y blur-radius color */
          /* box-shadow:offset-x offset-y blur-radius color spread-radius color */
  .container{
      display: flex;
  }
  .card{
      border: 2px solid red;
      padding: 20px 30px;
      margin: 10px;
      /* box-shadow: 10px 20px 40px 30px green; */
      /* box-shadow:inset 10px 20px 40px 30px green; */
      box-shadow: 10px 20px 40px  green, 10px 20px 40px  rgb(240, 0, 0);
      
  }
  .card h1{
      text-shadow: 3px 4px rgb(123, 123, 103);
  }
      </style>
  </head>
  
  <body>
      <div class="container">
      <div class="card" id="card1">
          <h1>card1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore repudiandae nobis accusantium magni?
              Repudiandae, excepturi! Placeat nostrum temporibus hic.</p>
      </div>
      <div class="card" id="card2">
          <h1>card1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore repudiandae nobis accusantium magni?
              Repudiandae, excepturi! Placeat nostrum temporibus hic.</p>
      </div>
      <div class="card" id="card3">
          <h1>card1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore repudiandae nobis accusantium magni?
              Repudiandae, excepturi! Placeat nostrum temporibus hic.</p>
      </div>
  </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
