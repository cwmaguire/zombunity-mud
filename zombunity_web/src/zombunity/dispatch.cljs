(ns zombunity.dispatch
  ;(:require [clojure.test :refer (deftest is run-tests)])
  )

(def listeners (atom {}))

(defn register-listener
  "Register function f against an event type key"
  [event-key f]
  ;(js/alert "Register fn for event " event-key)
  (swap! listeners assoc event-key (conj (or (get @listeners event-key) #{}) f)))

(defn dispatch
  "Given an event key, fire all functions registered for that event with the event data as a map"
  [event-key m]
  ;(js/alert (apply str "Dispatching on event " event-key "to listeners " (keys @listeners)))
  (doall (map (fn [f] (f m)) (event-key @listeners))))

;;;;;;;;;;;; TESTS ;;;;;;;;;;;;;;;;;;

;(deftest test-register-listener
;  (let [f (fn [m] m)]
;    (is (= {:event-key #{f}} (register-listener :event-key f)) "Registering listener"))
;  (swap! listeners (fn [_] {})))
;
;(deftest test-dispatch
;  (register-listener :event-key (fn [x] x))
;  (is (= (dispatch :event-key [1 2 3]) '([1 2 3])) "Getting value back from listener")
;  (swap! listeners (fn [_] {})))

;(run-tests)