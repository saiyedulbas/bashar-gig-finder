              const express = require('express');
                    const exphbs = require('express-handlebars');
                    const bodyParser = require('body-parser');
                    const path = require('path');

                    
                  const db = require('./config/database');

              
              db.authenticate()
      const app = express();

     
      app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
      app.set('view engine', 'handlebause(bodyParser.urlencoded({ extended: false }));

            
            app.use(express.static(path.join(__dirname, 'public')));

            
        app.use('/gigs', require('./routes/gigs'));

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, console.log(`Server started on port ${PORT}`));
      
        .then(() => console.log('Database connected...'))
        .catch(err => console.log('Error: ' + err))

            app.
            app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

           
