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

### GNU/Linux

This has been simplified down to a set of BASH scripts with a single script to kick everything off. 

All scripts assume they are run from you zombunity dev directory (i.e. where your project.clj file is)

#### First Run

1. ./start

    runs lein deps <br>
    Starts the HSQLDB <br>
    loads it with data <br>
    builds ClojureScript <br>
    runs HTTP server <br>
    runs a REPL for running the MUD server

1. Run the MUD server in the resulting REPL

> (ns zombunity.dispatch) <br>
> (register-daemons) <br>
> (start-processing-messages) <br>

#### Subsequent Runs

Only perform the necessary steps: e.g. if the database is running and has data, it doesn't need to be run again. 
You can kill the database with: 

> ps -A | grep java <br>
> kill -9 [process ID from previous step]

If the database goes down, the HTTP and MUD servers should be restarted. 

1. Load dependencies with

> lein deps

2. Start the database

> ./start_db

3. Load the database with data 

> ./load_data 

4. Build the ClojureScript

> lein run -m zombunity.build/build

5. Run the HTTP server

> lein run

6. Run the MUD server

> ./start_mud_repl

> (ns zombunity.dispatch) <br>
> (register-daemons) <br>
> (start-processing-messages)

### Windows

I've simplified this by using Leiningen, but only slightly. IDEA is no longer required. Also, I've switched to
running the MUD on a separate Lucid Puppy GNU/Linux box so all the commands are for GNU/Linux, but nothing
so onerous that it can't be fairly easily translated to Windows.

This is a four component system and I'm slowly working out how to make it a one step, portable process; there's
a MUD server, an HTTP server, a web client and an HSQLDB server.

1. Clone the git repo

    The jars are included, no need to worry about dependencies at this point.

    git clone https://github.com/cwmaguire/zombunity-mud

1. Download Hyper SQL Database

    [HSQLDB] (http://hsqldb.org)

    Unzip into a directory

    Familiarize yourself with the lib directory where the HSQLDB.jar and SqlTool.jar files are.

1. Start the HSQLDB server with a database called "zombunity"

    %HSQLDB_PATH%\lib>java -cp hsqldb.jar org.hsqldb.server.Server --database.0 file:zombunity --dbname.0 zombunity

1. Run the setup SQL with SqlTool:

    %HSQLDB_PATH%\lib>java -jar sqltool.jar --rcFile=%ZOMBUNITY_PROJ_PATH%/zombunity_server/db/sqltool.rc zombunity %ZOMBUNITY_PROJ_PATH%\zombunity_server\db\zombunity.sql

    e.g. D:\dev\hsqldb\lib>java -jar sqltool.jar --rcFile=d:/dev_zombunity/zombunity/zombunity_server/db/sqltool.rc zombunity d:\dev_zombunity\zombunity\zombunity_server\db\zombunity.sql

    Note the slashes: fwd for .rc, backward for .sql

1. Run the http server with "lein run"

    NOTE: you need to change the hard-coded StaticFileHandler path in http.clj (I know, I know, that's terrible. I'll get to it)

    change to the director where project.clj is

    open a command prompt / terminal and run "lein run"

1. Run a REPL for the MUD server

    I haven't worked out yet (I've had enough to do already) to get Leiningen to leave my server running.

    Instead we'll start our own repl.

    First copy all the .jar files from the local maven repo to a directory so we can set up the classpath easier:

    cd ~/.m2/repository
    find -name *.jar | xargs -i cp {} ~/my_temp_lib_dir

    Next run the REPL through the clojure jar:

    java -cp ~/my_temp_lib_dir/clojure-1.4.0.jar:~/my_temp_lib_dir:<path to zombunity_server/src> clojure.main

    Run the main function:

    (main)

1. Build the JavaScript

    NOTE: You have to change the source and destination paths in build.clj (I know, I fix, I fix!)

    Open a command prompt / terminal

    Change directory to the root of the project (where project.clj is)

    Run the build process:

    lein run -m zombunity.web/build

1. Open the web page:

    Open a web browser

    Tested with Chrome, should work with Firefox, probably won't work with IE or Opera

    Browse to the zombunity.html file

    e.g. http://localhost/zombunity.html

1. Click "Connect"
