(ns zombunity.daemon.login_test
  (:require [clojure.test :refer [deftest is]]
            [zombunity.daemon.login :as login]))


(deftest test-max-login-attempts
  (is
    (=
      {:type "login-max-attempts" :conn-id 1}
      (login/max-login-attempts 1 identity))))

(deftest test-get-user-id
  (is
    (=
      1
      (login/get-user-id "a" "b" (ref [{:id 1 :login "a" :password "b"}])))))