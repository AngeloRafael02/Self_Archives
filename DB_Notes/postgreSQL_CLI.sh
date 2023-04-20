 #POSTGRESQL commands
psql -U username  #prompts passwords to login on posgres

\copyright        #for distribution terms
\h                #for help with SQL commands
\?                #for help with psql commands
\g                #or terminate with semicolon to execute query
\q                #to quit
\i path\to\file   #for executing SQL files
\l                #list all database
\c dbName         #connect to a database

\d                #display tables of db including BIGSERIAL
dt                #display tables of db excluding BIGSERIAL
\d+ table_name    #show a table's columns
dv                #displays vies of the database
 
pg_dumpall -U postgres     > c:\pgbackup\all.sql  #creates backup of database to another directory/disk/etc.
    #SYNTAX:
    #                     v=prompts for password
    #pg_dump -U username -W -F t DBName > filepath\DBName.file <-SAMPLE
    #                       ^= specifies file format(c:custom-format archive file format, d:directory-format archive, t:tar, plain-text SQL script file)
