#!
   #Windows CMD Commands I use
   #By: Angelo Rafael Recio 

cls #Clearscreec
systeminfo #list system info

cd filename or fileaddress #change directory
cd          # go back to a parent directory

dir #display current directory contents
mkdir filename # make a new directory
rmdir filename # delete a directory

date #show/set date

#HOW TO STOP programs LISTENING on Certain PORTS:
netstat -ano | findstr :3000. # 3000 = PORT number, can be other ports
   # An output something like this will emerge:
TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       5468 # <- this number is needed for termination
TCP    [::]:3000              [::]:0                 LISTENING       5468
   # Then this this command + the number previously mentioned
taskkill /PID 5468 /F
   # Lastly the output will emerge
SUCCESS: The process with PID 5468 has been terminated. 