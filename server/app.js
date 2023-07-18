var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const { OpenAIApi, Configuration } = require('openai');

var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var resumesRouter = require('./routes/resumes');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/api/users', usersRouter);
app.use('/users', usersRouter);
app.use('/api/resumes', resumesRouter);

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

app.post('/api/magic', async (req, res) => {
  const { text } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Improve the following text, but keep it short: ${text}` }],
      max_tokens: 100,
      temperature: 0.3
    });

    const improvedText = response.data.choices[0].message.content;
    res.status(200).json({ magicText: improvedText });
  } catch (error) {
    console.error('Failed to call OpenAI API', error);
    res.status(500).json({ error: 'Failed to enhance text.' });
  }
});

// catch 404 and forward to error handler
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
  res.render('error');
});

module.exports = app;