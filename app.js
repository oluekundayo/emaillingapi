const express = require('express');
const path = require('path')
const logger = require("morgan");
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const Router = require('./routes')



const app = express();

app.use(logger('dev'))
app.use(express.urlencoded({extended: false, limit: '5gb'}));
app.use(cookieParser());
app.use(express.json({limit: '5gb'}))
app.use(express.static(path.join(__dirname, 'upload')));
app.use(cors({origin: '*'}));

app.get('/', (req, res) => {
    res.send('Hello API')
});
  
Router(app);

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.urlencoded({
    limit: '5gb',
    parameterLimit: 100000,
    extended: true 
}))

// app.use(bodyParser.json({limit: "5gb"}));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    // res.status(err.status || 500);
    res.json({
    message: err.message,
    error: err
    });
  });



app.listen(5000, () => console.log('Server live on http://localhost:5000'))