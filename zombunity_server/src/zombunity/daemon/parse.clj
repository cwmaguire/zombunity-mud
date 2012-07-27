(ns zombunity.daemon.parse)

(def ^:dynamic *dispatch-fn* (atom nil))

(defn register-dispatch-fn
  "one-time registration of the dispatch function;
   I couldn't refer back to dispatch (circular reference) so
   I'll have dispatch call this ns and load a dispatch fn."
  [dispatch-fn]
  (reset! *dispatch-fn* dispatch-fn))


(def command-events (atom {}))

(defn register-cmd-events
  "Registers each command and it's unique shortcut against and event"
  []
  )

(defn process-msg
  [{:keys [conn-id text]}]
  (@*dispatch-fn* {:type "client"
                   :message (str "echo: " text)
                   :conn-id conn-id}))

