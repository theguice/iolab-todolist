import os,json
from flask import Flask,render_template,g
from sqlite3 import dbapi2 as sqlite3

''' ------------------------------- setup and initialize app ------------------------------- '''

app = Flask(__name__)
app.config.update(dict(
    DATABASE='todos.db',
    DEBUG=True,
    USERNAME='admin',
    PASSWORD='default'
))


''' ------------------------------- your routes go here ------------------------------- '''

@app.route('/')
def index():
    return render_template('index.html')



''' ------------------------------- helper functions for accessing database ------------------------------- '''
# use get_db() to get a reference to the database
# then you can call db.execute(query) to issue sql commands
# and db.commit() to commit your changes

def dict_factory(cursor, row):
    """ Makes sqlite3 return dictionaries instead of row objects."""
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

def connect_db():
    """Connects to the specific database."""
    conn = sqlite3.connect(app.config['DATABASE'])
    conn.row_factory = dict_factory
    return conn

def init_db():
    """Creates the database tables."""
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db()
    return g.sqlite_db

@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()


if __name__ == '__main__':
    init_db()
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)  


