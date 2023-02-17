#! /bin/sh
    #Bash Scripting Notes

sudo <command> #SuperUsedDO, prefix command, elevates a command to admin priviliedges
sudo apt update #Checks for updates on packages
sudo apt upgrade -y # Upgrades the packages, -y flag => yes to all prompts
sudo systemctl status <packageName> # Checks if a package is running

    #INFO DISPLAY
man <command> #manual command, shows the purpose of a certain command
uname #Displays Kernel
uname -r # Displays Kernel Version
uname -a # Displays all Kernel Information
df # Displays disk usage in blocks
df -h # Displays disk usage in megabyte/gigabyte
free # Prints amount of free and used memory in blocks
free -m # Prints amount of free and used memory in Megabytes
cat /proc/meminfo # Displays detailed memory info
cat /etc/shells # Displays supported shell types
lsb_release -a # Display all LSB Information
lspci # Lists all PCI buses and devices connected to it
lsusb # Lists all USB devices
lshw  # Lists all Computer Hardware
top # Displays System information such as Memory and CPU Usade
timedatectl status # Displays Time
ps # Display all processes currently running
echo <option> <string> # outputs desired text

    # NETWORK
ifconfig # old way of showing network details
iwconfig # Display wireless network information
ip a # show / manipulate routing, network devices, interfaces and tunnels

    #DIRECTORY HANDLING
    #Change Permission (Also applies with files)
chmod <class><operator><permission> <fileName>
	# WHERE: Class -> u-user, g=group o=other, a=all
	#	 operator -> + = add permission, - = remove permission
	#	 permission -> r=read, w=write, x=exrcute/run
    #ChangeDirectory
cd #puts you in your home directory
cd <path> #puts you in a specific directory, can be absolutre or relative
cd .. #puts you in the current directory's parent directory

    #Directory Contents
dir #shows current directory name
ls #shows current directory contents
ls -a #shows current directory contents even hidden files
ls -l # shows current directory contents and details
ls -lah #shows current direcory contents and details even hidden file, with adjuisted size output
    # clear screen
clear # clears the terminal
    # make directory
mkdir folder0 # MAKE DIRECTORY - create a folder
mkdir -p folder1/folder2/folder3/.... # make nested directories
    # remove directory
rmdir folder0 # remove EMPTY directory
rmdir -p folder1/folder2/folder3/.... # remove specified nested directories
    # create file
touch file1.txt file2.txt ... # create one or more files
echo This is a Line of Text > SampleText.txt #Create a file and put initial text on it
file <file> #returns the type of file
rm SempleText.txt # remove a file
rm -i file1.txt file2.txt #remove multiple files but with permissions
rm -rf <folderName> # RM removing directory
    # copy and paste
cp <fileName> <newFileCopyName> # copy and paste into same directory
cp <filename> <AbsolutePath> # copy File into a new location/directory
cp -r <directory> <newDirectoryName> #copy and paste directory at the same location with its contents
    # move and rename file
mv <fileName> <newFileName> #rename file (works on directories as well)
mv <fileName> <AbsolutePath>/<newFileName> # move file and rename file

head <filename> # read first 10 lines of a file
head -<number> <fileName> #read first lines depending on number
tail <fileName> # read the last 10 lines of a file
    # concatinate files
cat <filename> <filename2> ... # prints and concatinates all contents of file
cat <filename> <filename2> ... > <newFile> # prints and concatinates all contents of file then extracts it into a new file
cat > <newFile> #Create file and add test to it (press ctrl + d to quit)
cat <filename> > <filename2> #copy and rename a file

more <filename> 
less <filename> # more and less commands help you navigate in big files

cal #displays calendar


    # WAYS TO SYSTEM SHUTDOWN
halt        #Brings the system down immediately
init 0      #Powers off the system using predefined scripts to synchronize and clean up the system prior to shutting down
init 6      #Reboots the system by shutting it down completely and then restarting it
poweroff    #Shuts down the system by powering off
reboot      #Reboots the system	
shutdown    #Shuts down the system

    # OTHER STUFF
sudo -i -u postgres && psql #switch to postgres acc then ise psql
sudo /opt/lampp/manager-linux-x64.run # to run 64-bit XAMPP control panel
smbclient //<ip-address>/<SambaFile> -U username #Access Samba File server
sudo systemctl set-default multi-user.target #Disable GUI
sudo systemctl set-default graphical.target  #Enable GUI