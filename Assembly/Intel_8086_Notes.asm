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

; MOV Instruction - Copies Second operand to first operand
; SYNTAX : MOV  FirstOperand/Destination SecondOperator/Source
;   MOV Reg Memory (and Vice Versa)
;   MOV Reg Reg
;   MOV Memory Immediate
;   MOV Reg Immediate
; [MOV Memory Memory Not supported]
MOV AX 17A0

; PUSH Intsruction - Pushes a value to stack memory
; SYNTAX : PUSH (Value/Memory/Register)
PUSH AX

; POP Intruction - takes the values at the top of the stack memory and places it somewehre else
; SYNTAX : POP (destination)
POP BX

; ADD Intrcution -  adds two values and puts the output at the first argument
; SYNTAX : ADD destination source
ADD AX BX
; ADC Intrcution -  adds two values and puts the output at the first argument and allows carry
; SYNTAX : ADC destination source carry_flag
ADC AX 1234h 1

; SUB Intrcution -  subtracts two values and puts the output at the first argument
; SYNTAX : SUB destination source
SUB AX 0
; SBB Intrcution -  subtracts two values and puts the output at the first argument and allows carry
; SYNTAX : SBB destination source carry_flag
SBB AX 1234h 1