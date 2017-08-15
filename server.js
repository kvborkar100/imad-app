var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={ 
  'articleOne' :{
  title:'Article One | Krushna Borkar',
  heading:'This is heading for one',
  content:` <p>
                This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.
            </p>
            
            <p>
                This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.
            </p>
            
            <p>
                This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.
            </p>`
},
  'articleTwo' : {
  title:'Article Two | Krushna Borkar',
  heading:'This is heading for two',
  content:` <p>  Two
                This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.
            </p>
            
            <p>
                This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.
            </p>
            
            <p>
                This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.
            </p>`
},
'articleThree':{
  title: 'Article Three | Krushna Borkar',
  heading:'This is heading for three',
  content:` <p>three
                This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.
            </p>
            
            <p>
                This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.
            </p>
            
            <p>
                This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.This is contet area.Write content here.
            </p>`
},
};
  

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
       var htmlTemplate=`
      <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width-device-width, initial-scale-1"/>
                <link href="/ui/style.css" rel="stylesheet"/> 
            </head>
        <body>
            <div class="container">
            <div>
                <a href="#">Home</a>
            </div>
         <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
               ${content}
            </div>
            </div>
            
        </body>    
    </html>
      `;
      return htmlTemplate;
}
      

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
