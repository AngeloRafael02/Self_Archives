#!/bin/bash

echo "Hello World"
	#VARIABLES
STRING="This is a test String"
echo $STRING
	#SPECIAL VARIABLES (type env in the command line to return a list of all special variables)
echo "File Name = "$0
echo "User = "$USER
echo "Hostname = "$HOSTNAME
echo "First Argument/Input = "$1  #Arguments/Inputs are reserved for number variables ($1,$2,$3,...)
