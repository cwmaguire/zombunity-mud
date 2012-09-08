@echo off

echo.
echo.Copying files from repo to server lib dir

for /R C:\Users\lulu\.m2 %%i in (*.jar) do copy %%i d:\dev_zombunity\zombunity\zombunity_server\lib

echo.
echo. copying files from server lib to http lib

copy d:\dev_zombunity\zombunity\zombunity_server\lib\*.jar d:\dev_zombunity\zombunity\zombunity_http\lib

echo.
echo. copying files from server lib to web lib

copy d:\dev_zombunity\zombunity\zombunity_server\lib\*.jar d:\dev_zombunity\zombunity\zombunity_web\lib