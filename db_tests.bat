START CMD /C CALL "start_db.bat"
START /WAIT CMD /C CALL "load_db.bat"
lein test zombunity.db.db-test