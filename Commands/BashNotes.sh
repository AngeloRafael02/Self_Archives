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
	
	# INPUT
	# Script Input (Use read to take inputs and store them as variables while a script is ongoing)
echo "Enter First Input:"
read first_Input 
echo "First Input: "$first_Input
		#NOTE: You can take the input and not store it in a custom variable, just use the REPLY variable)
echo "Enter Second Input: "
read
echo  "Second Input: "$REPLY
		# Using the PROMPT by adding the -p flag
read -p "Enter Third Input: "  third_Input
echo  "Third Input: "$third_Input
        # add -s flag to hide input
read -sp "Enter Fourth Hidden Input: " fourth_Input
echo  "Fourth Input: "$fourth_Input
		# add -a flag to to read multiple inputs using an array
echo "Enter Multiple Inputs"
read -a fifth_Input
echo  "Fifth Input: ${fifth_Input[1]}"

	# DATE
date # display current date
date +%B-%d-%Y #Display specifics of date using Format options (%B = Month, %d = Day, %Y = year)
date '+%B %d %Y'
