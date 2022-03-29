    #FILE HANDLING NOTES
    # By: ANGELO RAFAEL RECIO

    # YOU CAN USE PYTHON TO READ AND WRITE THE CONTENTS OF A FILE
    
    #start with opening a file with the open function 
    # SYNTAX: varname = open("filepath","mode") NOTE: filepath used must be absolute path
        # first argument is the path to the file, 
        # second argument is the mode
            #  "r" - read mode, also the default
            # "w" - write mode, for rewriting contents of a file
            # "a" - append mode, for adding new contents of a file
            # NOTE: add "b" after mode ("rb"), to open in binary mode, used for non-text files such as image/sound files


    # READ MODE
f = open("Self_Archives\Python\FileHandling\samplefile.txt", "r") #relative path works here in this case
content = f.read() #defalt content was "test sentence"
print(content)
f.close() #close() everytime a write or read is done


    # WRITING MODE -  NOTE: may override the whole content of the file
    # useful for updating/changing contents of the file
g = open("Self_Archives\Python\FileHandling\samplefile.txt", "w")
g.write("Oops!, I've re-written the Content") # Go check the original text file
g.close()

g = open("Self_Archives\Python\FileHandling\samplefile.txt", "r")
print(g.read()) # new content in the file
g.close()


    # APPEND MODE
    # useful for adding more contents to the file
h = open("Self_Archives\Python\FileHandling\samplefile.txt", "a")
h.write(" And now, the file has more content!")
h.close()

h = open("Self_Archives\Python\FileHandling\samplefile.txt", "r")
print(h.read())
h.close()

    #AT THE END OF THE CODE RUN, REPLACE THE CONTENT OF THE samplefile.txt  BACK TO "Reading Content Test"

#FURTHER NOTES:
#    - It is a good practice to always close file to not waste resources, one way to of doing this is the try and finally
#      for Example:
#
#           try:
#               f = open("Self_Archives\Python\FileHandling\samplefile.txt", "r")
#               content = f.read() #defalt content was "test sentence"
#               print(content)
#           finally:
#               f.close()
