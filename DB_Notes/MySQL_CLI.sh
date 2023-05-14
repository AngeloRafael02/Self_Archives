
#POSTGRESQL commands

mysql -u <username> <DBName> #login via username into a certain database, prompts password input
#NOTE: make sure that the mysql service is running to work
\h          #or \help - Print help about MySQL Shell
\q          #to quit
\js         #switch execution mode to javascript
\py         #switch execution mode to python
\sql         #switch execution mode to SQL

SHOW DATABASES;                 #List all databases
SHOW DATABASES LIKE "string"    #list all databases with the same name 
SHOW SCHEMAS;                   #List all schemas 
USE <DatabaseName>              #switch to another DB

source \path\to\file.sql;       # used when running SQL Scipts