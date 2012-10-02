zombunity-mud
=============

Zombunity MUD

An event-driven web MUD framework consisting of a MUD server, http server and web client.

Scroll to the bottom for a text version of "Getting Started"

YouTube Project Updates (Newest to Oldest):
--------------------------------------------
[Milestone Reached!] (http://www.youtube.com/watch?v=1IsLhGv5zyM)<br>
[Live DB Unit Tests & Deployment Scripts] (http://www.youtube.com/watch?v=Xb-_RwmZaZc) <br>

YouTube Code Tutorials (Newest to Oldest):
--------------------------------------------
[Daemon Filtering] (http://www.youtube.com/watch?v=dtMhSVFqHCo&feature=youtu.be) <br>
[Data Interface & Custom Data Test Data Providers] (http://www.youtube.com/watch?v=4wQIEikNlbs) <br>
[Bash Deployment Scripts for Linux] (http://youtu.be/UXCHh9uM14s) <br>
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

1. Clone the git repo

    git clone https://github.com/cwmaguire/zombunity-mud

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

To remove all the database files and start fresh: 

> rm -r zombunity.*

If the database goes down, the HTTP and MUD servers should be restarted. 

1. Load dependencies with

    > lein deps

1. Start the database

    > ./start_db

1. Load the database with data

    > ./load_data

1. Build the ClojureScript

    > lein run -m zombunity.build/build

1. Run the HTTP server

    > lein run

1. Run the MUD server

    > ./start_mud_repl

    > (ns zombunity.dispatch) <br>
    > (register-daemons) <br>
    > (start-processing-messages)

1. Open the web page:

    Open a web browser

    Tested with Chrome, should work with Firefox, probably won't work with IE or Opera

    Browse to the zombunity.html file

    e.g. http://localhost/zombunity.html

1. Click "Connect"

### Windows

This is slowly evolving to require less and less steps

1. Clone the git repo

    git clone https://github.com/cwmaguire/zombunity-mud

1. Run lein deps

1. Start the HSQLDB server

    > start_db.bat

1. Run the setup SQL with SqlTool

    > load_db.bat

1. Run the http server with "lein run"

    open a command prompt to the project dir and run "lein run"

1. Build the JavaScript

    open a command prompt to the project dir and run "lein run -m zombunity.build/build"

1. Copy libs from local repo to project lib folder

    > copy_libs.bat

1. Run a REPL for the MUD server

    Assuming %SERV_PATH% is the path to your zombunity_server directory (e.g. c:\dev\zombunity\zombunity_server)

    > java -cp %SERV_PATH%\lib\clojure-1.4.0.jar;%SERV_PATH%\lib\*;%SERV_PATH%\src\; clojure.main -i %SERV_PATH%\src\zombunity\dispatch.clj -r

    This will load up the dispatch script (-i) but keep the REPL open (-r)

    Run the main function:

    > (main)


1. Open the web page:

    Open a web browser

    Tested with Chrome, should work with Firefox, probably won't work with IE or Opera

    Browse to the zombunity.html file

    e.g. http://localhost/zombunity.html

1. Click "Connect"
