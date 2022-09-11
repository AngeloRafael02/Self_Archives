	// Icarus Verilog Notes
	// By: Angelo Rafael F. Recio

	// CMD Basic Commands
	// iverilog -> keyword used to compile modules into a new separate mudle that can be run.
		// SYNTAX for compiling from a file: iverilog -o <moduleName> <fileName>
	// vvp -> keyword used to run a compiled module
		// SYNTAX: vvp <compiledModuleName>

	//Module: a Block of Code thav perfroems a specific function
	//	- Starts with the keyword 'module', terminated to the keyword 'endmodule'
	//	- Input and Output ports should be decalred in the port list (the parenthesis) to be assigned a value later
module hello;
  //VARIABLES
  //Variable Syntax: <Data Type> <VariableName> - <Value>;
  integer sample = 1; // integer = used to store whole number values\
  real floatNumber = 3.14; // real used to store floating point values
  time end_time = 40; //time = used to store simulation time quantities, use "realtime" to store floating poit quantities
  reg [8*4:0] testString  = "test"; //reg = used to store string values 
    //reg syntax: reg[byte amount:boolean(1=string, 0=not sting idk)]
    // NOTE: When stroring String Values, memory must be managed not enoug bytes and the value will be used wiht missing characters, too much and Varilog Adds 0 to the string

  initial 
    begin
      $display("Hello, World");
      $display(sample);
      $display(floatNumber);
      $display(end_time);
      $display(testString);
      $finish;
    end
endmodule

