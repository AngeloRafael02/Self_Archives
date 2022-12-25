
   ::Windows Command Lines
   ::By: Angelo Rafael Recio 

   ::NOTE: some information/tasks are for the administrator only
   :: to run with adminsitrator priviledges run CMD as Administrator (type CMD, then ctrl+shift+Enter)

help ::displays a list of main command lines
help <command> :: displays the commands functions and some documentations
<command> /? :: alternative syntax

cls ::Clearscreen
systeminfo ::list system info

cd filename or fileaddress ::change directory, you can use absolute and relative paths
cd ..  :: go back to a parent directory

dir ::display current directory contents
mkdir <filename> :: make a new directory
rmdir <filename> :: delete a directory

echo This is a Line of Text > SampleText.txt ::Create a file and put initial text on it

date ::show/set date

msg <username> :: to send amessage to a nother device on the same network, use "*" for all in the networks

PAUSE :: used to temporarily stop a series of script 

shutdown  /s /t <numberOfSeconds> :: shutsdown computer after a given amount of seconds
shutdown  /r /t <numberOfSeconds> :: shutsdown then restersta after a given number of seconds
   :: /s =  shutdown, /r sutdown+restart, /t <seconds> = timer

::HOW TO STOP programs LISTENING on Certain PORTS:
netstat -ano | findstr :3000. :: 3000 = PORT number, can be other ports
   :: An output something like this will emerge:
TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       5468 :: <- this number is needed for termination
TCP    [::]:3000              [::]:0                 LISTENING       5468
   :: Then this this command + the number previously mentioned
taskkill /PID 5468 /F
   :: This output will emerge
SUCCESS: The process with PID 5468 has been terminated. 