(defproject zombunity-mud "0.1.1-SNAPSHOT"
  :description "Web-based mud server with websockets"
  :url "https://github.com/cwmaguire/zombunity-mud"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main zombunity.http
  :repositories {"project" "file:repo"}
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.webbitserver/webbit "0.4.14"]
                 [org.clojure/data.json "0.1.3"]
                 [org.clojure/java.classpath "0.2.0"]
                 [org.clojure/tools.namespace "0.1.3"]
                 [local/clj "1.0.0"]
                 [local/cljs "1.0.0"]
                 [local/goog "1.0.0"]
                 [local/compiler "1.0.0"]]
  :source-paths ["zombunity_server/src" "zombunity_web/src"]
  :test-paths ["zombunity_server/test"])