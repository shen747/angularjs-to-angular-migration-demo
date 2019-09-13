echo off
cls
echo Inserting Test Data from sql script
db\cockroach sql --insecure   < db/setup_data.sql
pause