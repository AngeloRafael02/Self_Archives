	// Icarus Verilog Module Notes
	// By: Angelo Rafael F. Recio

	//Module: a Block of Code thav perfroems a specific function
	//	- Starts with the keyword 'module', terminated to the keyword 'endmodule'
	//	- Input and Output ports should be decalred in the port list (the parenthesis) to be assigned a value later
module fullAdder(a,b,c_In,sum,c_out);
    input a,b,c_In; //input -  variables that take on given values
    output sum, c_out; //out - varaible that will take the results of the simulation
    wire xor1,and1,and2; //wire - 'temporary' stores outputs that will be used in other inputs. used as inputs&outputs but not for final results

    xor(xor1,a,b);
    xor(sum,xor1,c_In);
    and(and2,a,b);
    and(and1,xor1,c_In);
    or(c_out,and1,and2);
endmodule

module fullAdderTB;
    reg a,b,c_in;
    wire sum,c_out;

    fullAdder fladd(a,b,c_in,sum,c_out);

    initial 
        begin
            a=0; b=0; c_in=0;
            
            $display("Simulating Full Adder");
            $monitor("A=%b, B=%b, C_in=%b, sum=%b, C_out=%b",a,b,c_in,sum,c_out);

            #10 a=0; b=0; c_in=1;
            #10 a=0; b=1; c_in=0;
            #10 a=0; b=1; c_in=1;
            #10 a=1; b=0; c_in=0;
            #10 a=1; b=0; c_in=1;
            #10 a=1; b=1; c_in=0;
            #10 a=1; b=1; c_in=1;
            #10 $finish;
        end
endmodule