zombunity-mud
=============

Zombunity MUD

An event-driven web MUD framework consisting of a MUD server, http server and web client.

Scroll to the bottom for a text version of "Getting Started"

YouTube Code Tutorials:
-----------------------
[Getting Started on Heroku] (http://www.youtube.com/watch?v=44YNnFkVeJA) <br>
[Getting Started] (http://www.youtube.com/watch?v=UNd3UT4OShs&feature=youtu.be) <br>
[Login Handling] (http://www.youtube.com/watch?v=gEbyLqxB1C0&feature=youtu.be "Login Handling") <br>
[JDBC Gotchas] (http://www.youtube.com/watch?v=bbScWWj_sPU "JDBC Gotchas") <br>
[Registering Daemons] (http://www.youtube.com/watch?v=HzMQ8c3PWiE "Registering Daemons") <br>
[Basic Framework] (http://www.youtube.com/watch?v=sKdL5onIiWQ "Basic Framework") <br>
[WebSocket Tutorial] (http://www.youtube.com/watch?v=Jl69WXhiX2w "WebSocket Tutorial") <br>
[Compiling ClojureScript] (http://www.youtube.com/watch?v=_25R3MMB_H8 "Compiling ClojureScript") <br>

Web Client:
-----------

  A ClojureScript web page that uses an event dispatch model to communicate between namespaces in place of
  a traditional MVC model.

  Uses Google Closure WebSocket to communicate with an HTTP server.

HTTP Server:
------------

  A Webbit server that does three things:

    - registers client connections with an ID
    - places text from the client into the MUD server message queue with it's ID
    - polls the client message queue for messages from the server and sends them to the appropriate client.

MUD Server:
-----------

  A event dispatch system that does three things:

    - polls the message queue for messages from clients
    - writes client messages to the message queue for the HTTP server to relay
    - dispatches events to daemons to process into more events

Walkthrough:
------------

    - Client types "attack bear"
    - web dispatch creates :input event
    - websocket namespace sends :text event with text ("attack bear") as JSON to HTTP server
    - HTTP server adds connection ID of client to JSON and stores in MUD server message queue
    - MUD server polls message queue and removes messages
    - MUD server converts the JSON to a Clojure map
    - MUD server dispatches on event type (:text) to appropriate daemon
    - Daemon processes event, generates more events, sends them to dispatch
    - MUD server continues to dispatch out events
    - Client message events (:client) are put in the client message queue for the HTTP server
    - HTTP server polls the client message queue
    - HTTP server looks up client connection by connection ID in message
    - HTTP server sends message to client via WebSocket connection.
    - web dispatch sends :message event
    - web gui namespace displays message / updates gui


Getting Started:
----------------
This is a stop-gap section until I can get a video tutorial done to explain how to get started:

1. Clone the git repo

    The jars are included, no need to worry about dependencies at this point.

1. Download Hyper SQL Database

    [HSQLDB] (http://hsqldb.org)

    Unzip into a directory

    Familiarize yourself with the lib directory where the HSQLDB.jar and SqlTool.jar files are.

1. Start the HSQLDB server with an in-memory database called "zombunity"

    %HSQLDB_PATH%\lib>java -cp hsqldb.jar org.hsqldb.server.Server --database.0 mem:zombunity --dbname.0 zombunity

    If you'd like the DB persisted to disk use --database.0 zombunity, or --database.0 file:zombunity instead of --database.0 mem:zombunity

    Be sure to set the db.name

1. Run the setup SQL with SqlTool:

    %HSQLDB_PATH%\lib>java -jar sqltool.jar --rcFile=%ZOMBUNITY_PROJ_PATH%/zombunity_server/db/sqltool.rc zombunity %ZOMBUNITY_PROJ_PATH%\zombunity_server\db\zombunity.sql

    e.g. D:\dev\hsqldb\lib>java -jar sqltool.jar --rcFile=d:/dev_zombunity/zombunity/zombunity_server/db/sqltool.rc zombunity d:\dev_zombunity\zombunity\zombunity_server\db\zombunity.sql

    Note the slashes: fwd for .rc, backward for .sql

1. Open the project in IDEA

    (I'm using IDEA 11.1.3)

    Make sure you have La Clojure installed

1. Start a REPL for the <b>zombunity_http</b> module

    click on the module, press Ctrl+Shift+F10 or go to Tools -> Start Clojure Console

    Note: it's important to click on the module first so that the appropriate jars are loaded in the REPL classpath

1. Load the http.clj file to the REPL

    Open the file

    Put the cursor inside the file

    Press Ctrl+Shift+L or go to Tools -> Clojure REPL -> Load File to REPL

1. Run the HTTP server

   In the http REPL type (zombunity.http/-main) [Enter]

1. Start a REPL for the <b>zombunity_server</b> module

    click on the module, press Ctrl+Shift+F10 or go to Tools -> Start Clojure Console

1. Load the dispatch.clj file to the REPL

    Open the file

    Put the cursor inside the file

    Press Ctrl+Shift+L or go to Tools -> Clojure REPL -> Load File to REPL

1. Register the daemons

    In the dispatch REPL type:

    (ns zombunity.dispatch) [Enter]

    (register-daemons) [Enter]

1. Run the server

    In the dispatch REPL type:

    (start-processing-messages) [Enter]

1. Start a REPL for the <b>zombunity_web</b> module

    click on the module, press Ctrl+Shift+F10 or go to Tools -> Start Clojure Console

1. Compile the ClojureScript to JavaScript

    Open the build.clj file

    Put the cursor inside the file

    <b>Wait!</b> Change the src, output-dir and output-to paths to point to your project

    Press Ctrl+Shift+L or go to Tools -> Clojure REPL -> Load File to REPL

    This will build the JavaScript.

    If you need to recompile the JavaScript switch to the zombunity namespace and run (build-home):

    (ns zombunity.build) [Enter]

    (build-home) [Enter]

1. Open the web page:

    Open a web browser

    Tested with Chrome, should work with Firefox, probably won't work with IE or Opera

    Browse to the zombunity.html file

    e.g. file:///D:/dev_zombunity/zombunity/zombunity_web/src/public/zombunity.html

1. Click "Connect"
