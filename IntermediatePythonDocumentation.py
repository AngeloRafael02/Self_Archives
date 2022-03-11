
#DICTIONARIES
nums = {
    1: "one",
    2: "two",
    3: "three",
}
    #functions
## "in" and "not in" can be used to locate if a value is in a dictionary
#print(1 in nums) #prints True
#print("three" in nums) # prints False
#print(4 not in nums) # prints True

## get(): used to locate in dictionaries where pairs don't have indexes
print(nums.get(1)) #prints the value of the key"1"
print(nums.get(6,3)) #can take two keys and prints next key as INT if first key is not found
print(nums.get(8)) #prints "none" of no keys were found

