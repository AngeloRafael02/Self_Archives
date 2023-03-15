; 8086 Assembly Notes

; DECLARING VARIABLES - SYNTAX: Var_Name Type Value : Respectively
message: DB 'Hi'  ; Data Byte Memory is allocated per character
    ; Data Types: DB-Define Byte, DW-Define Word, DD-Define Double Word, DQ-Define Quadword
    ; String in Assembly Language
str1: DB "Hello"
str2: DB "Hello Again",'$' ; $ for end of string
str3: DB 10,13,"Heyy",'$'  ; For simplications, 10,13 is for new line
    ; Arrays
arr DW 1111h, 2222h, 3333h
    ; Array Duplication
arrdup DB 3 DUP(5,6) ; returns  5,6,5,6,5,6

; MOV Instruction  - Copies Second operand to first operand
; SYNTAX : MOV  FirstOperand/Destination SecondOperator/Source
;   MOV Reg Memory (and Vice Versa)
;   MOV Reg Reg
;   MOV Memory Immediate
;   MOV Reg Immediate
; [MOV Memory Memory Not supported]
MOV AX 17