require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const logger = require('morgan');
const cors = require('cors');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// const partyRouter = require('./routes/party');

const app = express();

// view engine setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
  name: 'assessment',
  secret: 'auf',
  store: new FileStore(),
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 },
};

app.use(session(sessionConfig));

// app.use((req, res, next) => {
//   res.locals.login = req.session?.user?.login;
//   res.locals.user = req.session?.user;
//   res.locals.isAuth = req.session?.isAuth;
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/party', partyRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(process.env.PORT ?? 3001, () => { console.log('go'); });
