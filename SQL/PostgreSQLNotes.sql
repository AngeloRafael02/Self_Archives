    --NOTE: This file is NOT to be executed to any program. This file is a Documentation of lessons.

    --POSTGRESQL
    --\copyright        for distribution terms
    --\h                for help with SQL commands
    --\?                for help with psql commands
    --\g or terminate with semicolon to execute query
    --\q                to quit
    --\i scriptfilePath for executing SQL files
    --\l = list all database
    --\c dbName         connect to a database

    --\d                diaplay tables of db including BIGSERAL
    --dt                diplay tables of db excluding BIGSERAL
    --\d+ table_name    show a table's columns
    --dv                displays vies of the database

    --pg_dump: creates backup of database to another directory/disk/etc.
    --pg_dumpall -U postgres     > c:\pgbackup\all.sql
    --                     v=prompts for password
    --pg_dump -U username -W -F t dbname > filepath\dbname.file <-SAMPLE
    --                       ^= specifies file format(c:custom-format archive file format, d:directory-format archive, t:tar, pplain-text SQL script file)

    --Basics

    --CREATE TABLE: create a tble fr a database
CREATE TABLE (tablename){ --CREATE Table with its columns
    id BIGSERIAL NOT NULL PRIMARY KEY, --PRIMARY KEY:used to identify a row uniquely in a table, SERIAL/BIGSERIAL: auto-increments
    profile_pic BYTEA NOT NULL,--more info in uploading binary data: https://www.postgresql.org/docs/7.4/jdbc-binary-data.html#:~:text=To%20insert%20an%20image%2C%20you,%2C%20%3F)%22)%3B%20ps.
    username VARCHAR(50) NOT NULL UNIQUE, -- UNIQUE: no same data
    birthday DATE NOT NULL--YYYY-MM-DD format
    time_of_access TIME NOT NULL, --HH:MM:SS format
    contactNumber INTEGER NOT NULL, -- INT nomlar sizewd, can be signed or unsigned
    bio TEXT, -- large amount of text data
    email VARCHAR(50) DEFAULT,
    isbanned BOOLEAN -- boolean: true or false
}; 
    --More data types here => https://www.postgresql.org/docs/9.5/datatype.html
    --More SQL constraints => https://www.w3schools.com/sql/sql_constraints.asp 

    --ALTER TABLE: used to add deelte or modify columns
ALTER TABLE tablename ADD column3 VARCHAR(50) NOT NULL;
ALTER TABLE tablename RENAME COLUMN column3 TO column4;
ALTER TABLE tablename DROP COLUMN column4; --More Drop column info: https://www.postgresqltutorial.com/postgresql-drop-column/

    --INSERT: create new row of Data
INSERT INTO tablename (column1, column2,...) VALUES ('value1', number, ...); --INSERT new row of Data
    --DROP: for deleting mass DATA
DROP TABLE tablename;
DROP DATABASE dbName;
    --DELETE: for deleting row/s of data
DELETE FROM tablename WHERE condition; --can delete multiple rows
DELETE FROM tablename; -- will delete all rows
DELETE FROM dbName; -- delete database

    --CREATE VIEW: make shortcut commands/define a new view
CREATE VIEW commandname AS (SQL_command) 
SELECT * FROM commandname; --to call the View, command can still be modified: SELECT * FROM commandname OFFSET 12; 
    --to update or make new view
CREATE OR REPLACE VIEW commandname AS (SQL_command)
    --Delete a view
DROP VIEW commandname;

    --UPDATE: Update row or properties
UPDATE tablename SET column1 = 'newValue1', column2 = 'newValue2',... WHERE condition;

    --SELECT TOP/LIMIT:limit output to a number of rows
SELECT * FROM tablename LIMIT number;
SELECT * FROM tablename LIMIT(SELECT count(*) FROM tablename)*0.01; -- LIMIT via Percentage
SELECT * FROM tablename LIMIT (SELECT (COUNT(*) * 0.10) :: INTEGER FROM tablename); -- LIMIT via Percentage
                                                -- ^- percentage(decimal value)
        --Basic Commands
SELECT * FROM tablename; -- Sellect All columns from a table
SELECT column1, column2,... FROM tablename; -- Columns can be many
    --OFFSET
SELECT * FROM tablename OFFSET rownumber; -- Select All from a table starting from a specific row. Maybe a PostgreSQL exclusive
    --LIMIT
SELECT * FROM tablename LIMIT 5; 
    --DISTINCT
SELECT DISTINCT column1 FROM tablename; --DISTINT removes duplicate values

    --WHERE
SELECT * FROM tablename WHERE column1 = 'string'/number; -- SELECT all with a scecific value from a column
                                      ^ -- can be other comparison operators (<, > , <=, etc.)
    --WHERE...IN
SELECT * FROM tablename WHERE column1 IN ('value1', 'valu2', 'value3',...) -- Select all with multiple values
    --WHERE...AND
SELECT * FROM tablename WHERE column1 = 'value1' AND column2 = 'value2'; -- Select all that has 2 cpecific rwuirements from seperate columns   
    --WHERE...BETWEEN                             
SELECT * FROM tablename WHERE date_of_birth BETWEEN DATE 'year-month-day' AND 'year1-month1-day1'; --Select between specific dates.
                                                        ^ -- Data format, optional 
    --WHERE...OR
SELECT * FROM tablename WHERE column1 = 'value1' OR column1 = 'value2' OR ... --Select all with numeroes value in a column
SELECT * FROM tablename WHERE column1 = 'value1' AND  (column2 = 'value2' or column2 = 'value3');
SELECT * FROM tablename WHERE column1 = NULL; -- NULL: when theres is no value 

    --LIKE (case-sensitive), use ILIKE to make it not case-sensitive
SELECT * FROM tablename WHERE column1 LIKE '%scpecificValue' -- Select all where an colum value is LIKE a certain value, % = any character, ____ = any character as loing as the underscore
SELECT * FROM tablename WHERE CustomerName LIKE 'a%'	--Finds any values that starts with "a"
SELECT * FROM tablename WHERE CustomerName LIKE '%a'	--Finds any values that ends with "a"
SELECT * FROM tablename WHERE CustomerName LIKE '%or%'	--Finds any values that have "or" in any position
SELECT * FROM tablename WHERE CustomerName LIKE '_r%'	--Finds any values that have "r" in the second position
SELECT * FROM tablename WHERE CustomerName LIKE 'a__%'	--Finds any values that starts with "a" and are at least 3 characters in length
SELECT * FROM tablename WHERE ContactName LIKE 'a%o'	--Finds any values that starts with "a" and ends with "o"
    --UNDERSCORE can repalce wildcards (one character per underscore)
SELECT * FROM tablename WHERE ContactName LIKE = '__________berg'

    --GROUP BY: used to know the frequency of each unique value 
SELECT column1, COUNT(*) FROM tablename GROUP BY column1 ORDER BY column1;
    --GROUP BY...HAVING : extra "filetring" adter aggregation
SELECT column1, COUNT(*) FROM tablename GROUP BY column1 HAVING COUNT(*) > 5 ORDER BY column1;
                                                                    --   ^can be other condition

    --FUNCTIONS
SELECT UPPERCASE(column2) AS column2 FROM tablename
    --UPPPER(column) - converts all letter on the specified string to UPPERCASE
    --LOWER(column) - converts all leters on the specified strings to LOWERCASE
    --SQRT(column) - returns square root of the given value
    --SUM(column) - returns the total of the column's values
    --MIN(column) - returns the smallest value among the column
    --MAX(column) - returns the largest value among r=the column
    --AVG(column) - returns the avreage of all the values among the column
    --COUNT(column) - returns the number of rows/items
SELECT COUNT(*) FROM tablename --shows number of rows of a table

    --SUBQUERIES : Query inside a Query
SELECT * FROM tablename WHERE column1 IN ("value1","value2",...) --Select all with numeroes value in a column
SELECT * FROM tablename WHERE column1 > (SELECT AVG(column1) FROM tablename) ORDER BY column1 DESC;
    --                                       ^-Start of SUBQUERY
SELECT * FROM tablename WHERE column1 > (SELECT Min(column1) FROM tablename) ORDER BY column1 DESC;
    --                                            ^-Subquery                                    ^-Descending Order, ASC or  (ascending) by default
SELECT * FROM tablename WHERE column1 < (SELECT Max(column1) FROM tablename) ORDER BY column1 DESC;
    --                                ^-Logical operator

    --JOINING TABLES: for comparing data. v-An example of a Left/Right Join
SELECT tablename.column1, tablename1.column2,... FROM tablename, tablename1 WHERE tablename.column1 = 'String'/number AND tablename1.column2 = 'value'/number;
    --INNER JOIN (A ∩ B) intersection of A and B
SELECT tablename.column1, tablename1.column2,... FROM tablename INNER JOIN tablename1 ON tablename.column1 = tablename1.column1;

    --LEFT JOIN ((A ∩ B) && A) (intersection of A and B) + A | A = weapons, B = characters
SELECT weapons.id, characters.name, weapons.star, weapons.name, weapons.secondstat FROM characters, weapons WHERE characters.name = 'Jean' AND weapons.weapon = 'sword' ORDER BY weapons.id ASC;
    --or
SELECT tablename.column1, tablename1.column2,... FROM tablename LEFT JOIN tablename1 ON tablename.column1 = tablename1.column1;

    --RIGHT JOIN ((A ∩ B) && A) (intersection of A and B) + B | A = weapons, B = charactersSELECT weapons.id, characters.name, weapons.star, weapons.name, weapons.secondstat FROM characters, weapons WHERE characters.name = 'Jean' AND weapons.weapon = 'sword' ORDER BY weapons.id DESC;
SELECT weapons.id, characters.name, weapons.star, weapons.name, weapons.secondstat FROM characters, weapons WHERE characters.weapon = 'sword' AND weapons.name = 'freedom_sword' ORDER BY weapons.id ASC;
    --or
SELECT tablename.column1, tablename1.column2,... FROM tablename RIGHT JOIN tablename1 ON tablename.column1 = tablename1.column1;


    --UNION, putting 2 tables together with duplicates from both tables
    --UNION ALL, without duplicates
SELECT column,column1 FROM  tablename UNION SELECT column, column1 FROM tablename2;

    --UPDATE: Update row/s  via a contition
UPDATE tablename SET column = 'value2',... WHERE condition;

    --Make Column constrain NOT NULL and Vice Versa
ALTER TABLE users ALTER COLUMN email DROP NO NULL;
ALTER TABLE users ALTER COLUMN email SET NO NULL;

    --Change column data type
ALTER TABLE table_name ALTER COLUMN column1 TYPE datatype USING experssion
    -- EXAMPLE: ALTER TABLE weapons ALTER COLUMN domainname TYPE integer USING domainname::integer



