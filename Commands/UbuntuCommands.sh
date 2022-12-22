    #Ubuntu Notes

man <comman> #manual command, shoes the purpose of a certain command
    #DIRECTORY HANDLING
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
rmdir folder0 # remove EPMTY directory
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
cp -r <directory> <newDirectoryName> copy #and paste directory at the same location with its contents
    # move and rename file
mv <fileName> <newFileName> #rename file (works on directories as well)
mv <fileName> <AbsolutePath>/<newFileName> # move file and rename file

head <filename> # read first 10 lines of a file
head -<number> <fileName> #read first lines depending on number
tail <fileName> # read the last 10 lines of a file