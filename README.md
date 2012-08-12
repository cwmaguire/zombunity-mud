zombunity-mud
=============

Zombunity MUD

An event-driven web MUD framework consisting of a MUD server, http server and web client.

Scroll to the bottom for a text version of "Getting Started"

YouTube Code Tutorials:
-----------------------
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

1. Clone the git repo

1. lein deps

    local jars are in the directory "repo" and are loaded automatically

1. Compile the ClojureScript to JavaScript

    lein run -m zombunity.build/build

1. Run the server
    
    lein run 8080

        port 80 didn't work for me on Ubuntu in firefox; not sure why

1. Open the web page:

    Open a web browser

    Tested with Chrome and Firefox, probably won't work with IE or Opera

    Browse to the zombunity.html file

    e.g. http://<my-pc-name>:8080/zombunity.html

1. Click "Connect"
