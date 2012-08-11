(defproject zombunity-mud "0.1.0-SNAPSHOT"
  :description "Web-based mud server with websockets and message queue"
  :url "https://github.com/cwmaguire/zombunity-mud"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main zombunity.http
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.hsqldb/hsqldb "2.2.8"]
                 [org.clojure/java.jdbc "0.2.3"]
                 [org.webbitserver/webbit "0.4.14"]
                 [org.clojure/data.json "0.1.3"]
                 [org.clojure/java.classpath "0.2.0"]
                 [org.clojure/tools.namespace "0.1.3"]])