	// Icarus Verilog Notes
	// By: Angelo Rafael F. Recio

	// CMD Basic Commands
	// iverilog -> keyword used to compile modules into a new separate mudle that can be run.
		// SYNTAX for compiling from a file: iverilog -o <moduleName> <fileName>
	// vvp -> keyword used to run a compiled module
		// SYNTAX: vvp <compiledModuleName>

module hello;
  initial 
    begin
      $display("Hello, World");
      $finish;
    end
endmodule

module goodbye;
  initial 
    begin
      $display("Goodbye");
      $finish;
    end
endmodule
