@echo off

SET PROJ_PATH=d:\dev_zombunity\zombunity
SET SERVER_LIB=zombunity_server\lib
SET HTTP_LIB=zombunity_http\lib
SET WEB_LIB=zombunity_web\lib

echo.
echo Ensuring lib dirs exist (ignore any "already exists" errors)
echo.

md %PROJ_PATH%\%SERVER_LIB%
md %PROJ_PATH%\%HTTP_LIB%
md %PROJ_PATH%\%WEB_LIB%

echo.
echo Copying files from repo to server lib dir
echo.

for /R C:\Users\lulu\.m2 %%i in (*.jar) do copy %%i %PROJ_PATH%\%SERVER_LIB%

echo.
echo Copying files from server lib to http lib
echo.

copy d:\dev_zombunity\zombunity\zombunity_server\lib\*.jar %PROJ_PATH%\%HTTP_LIB%

echo.
echo Copying files from server lib to web lib
echo.

copy d:\dev_zombunity\zombunity\zombunity_server\lib\*.jar %PROJ_PATH%\%WEB_LIB%