const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const { dirname } = require('path/posix');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

//set up handlebars as apps template of choice
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//add public folder
app.use(express.static(path.join(__dirname, 'public')));
//set handlbars to be engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//turn on routes
app.use(routes);

//turn on session
app.use(session(sess));

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});