<h2>IO Lab HW4 Part 2: Flask To-Do List</h2>

<h3>Assignment Description</h3>
<p>For this combo assignment/lab you will build a functioning to-do list using Python and Flask.</p>
<p>We expect that you will modify your existing to-do list from previous assignments, but if you prefer to start fresh you can build on to the basic to-do list located here: <a href="http://github.com/krushton/todo-list">Sample to-do list</a></p>

<h3>Helpful Links</h3>
<ul>
    <li><a href="http://jinja.pocoo.org/docs/templates/">Jinja2 Template Docs</a></li>
    <li><a href="http://flask.pocoo.org/docs/quickstart/">Flask Docs</a></li>
    <li><a href="http://flask.pocoo.org/docs/tutorial/">Flaskr Sample App</a></li>
    <li><a href="http://github.com/krushton/flask-api-example">Flask API Example</a></li>
    <li><a href="http://docs.python.org/2/library/sqlite3.html">Python sqlite3 docs</a></li>
    
</ul>

<h3>Step 1: Plan the App</h3>
<div>Right now, the to-do list items only exist client-side. Decide what routes your Flask app will need to store to-dos in a database and retrieve them again... at a minimum your app should support the following functionality: 
    <ul>
        <li>Add a new to-do.</li>
        <li>Remove a specific to-do</li>
        <li>View all to-dos</li>
    </ul>
</div>

<h3>Step 2: Install Dependencies</h3>
<p>Before you get started you will need to install Flask: <a href="http://flask.pocoo.org/docs/installation/">Instruction</a>.<br>
<b>Note:</b> These instructions assume you have installed pip (Python package manager) prior to lab. If you have not yet, see the instructions on Piazza.</p>


<h3>Step 3: Convert your to-do list into a Flask App</h3>
<p>Perform the following steps to change your existing app into the format expected by Flask:</p>
<ol>
    <li>Create a file called <code>app.py</code> in the root directory of your project. Replace its contents with the contents with one of the following files in <b>this</b> repository:
        <ul>
            <li>If you are new to Python and SQL, copy <code>app-easier.py</code></li>
            <li>If you are already familiar with SQL and Python, copy the code from <code>app-harder.py</code></li>
        </ul>
    </li>
    <li>Copy the file <code>schema.sql</code> from this repository to the root directory of your project.</li>
    <li>Create a folder called <code>templates</code> in the root directory. Copy the html file from your to-do project into this directory (if it isn't named "index.html", rename it)</li>
    <li>Create a folder called <code>static</code> in the root directory. Copy your css and javascript files into this folder. Don't forget to also change the references in your html files (e.g. instead of 'style.css' the link would be 'static/style.css'</li>
</ol>

<h3>Step 4: Update Schema</h3>
<p>A basic to-do has a title and a flag to indicate whether the todo is complete. If todo items in your app have additional attributes, you will need to add additional properties to the schema.sql file.</p>


<h3>Step 5: Run App</h3>
<p>From the command line, CD into the project directory, then type <code>python app.py</code>. If the app starts successfully you will get a message saying that the app is running at http://0.0.0.0:5000. Go to a web browser and open http://localhost:5000. You should see your todo list page.</p>


<h3>Step 6: Create Route Functions</h3>
<p>In <code>app.py</code>, create a function for each of the routes you identified in step 1.</p>
<ol>
    <li><b>Matching routes</b><br>For each function, specify what route should go there with the @app.route annotation, as in <code>@app.route('/todos')</code>. Don't forget to specify the method (eg POST, DELETE) for routes that are not GET requests.</li>
    <li><b>Request data</b><br>For some routes you will  want to access data about the incoming request. See the Flask documentation for the Request object.</li>
    <li><b>Database interaction</b><br>If you copied the contents of app-easier.py, the file has a set of helper functions to use to access the database. Otherwise, you will need to use Python's sqlite3 module syntax - see link above.</li>
    <li><b>Response data</b><br>Each function should also return something to the client; depending on the structure of your app that could be a rendered HTML template, a JSON message, a string, etc. See the Flask docs for Response.</li>
    <li>For functions that return HTML pages, you should create a template for the page, and the last line of the function will be something like <code>return render_template("templatename.html", variable1=myvar1, variable2=myvar2...)</code></li>
</ol>

<h3>Step 7: Modify index.html and JS files</h3>
<p>You will need to modify the JavaScript and index.html files as well so they communicate with the server-side code. For example, when the user submits the new item form you could post that data to the server with AJAX.</p>

