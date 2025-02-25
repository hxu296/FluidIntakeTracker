### Backend general structure
- Functions
	- get_fluid_amount
		- input
			- void
		- output
			- Number amount 						 // amount of fluid to be taken
			- String unit 							 // measurement unit, e.g. "oz"
	- get_remainder_timestamps
		- input
			- void
		- output
			- Array remainder_timestamps	 				 // array of remainder timestamps 
	- parse_into_remainders
		- input							
			- Number amount						  	 // amount of fluid to be taken 
			- String unit							 // measurement unit
			- Array remainder_timestamps	 				 // array of remainder timestamps
		- output
			- Array remainders						 // array of remainders
	- display_banner
		- input
			- Object remainder						 // information about the banner
		- output
			- Boolean is_taken						 // true if fluid is taken, false otherwise
	- save_log
		- input, output
			- void
		- what this function does
			- generate and save log according to the global variable remainders_fluid_is_taken
	- main
		- input, output
			- void
		- what this function does
			- This function would constantly check time. If the current time is close to a remainder, it will call display_banner with that remainder. When a new day begins, it will call save_log to dump log for yesterday. Then, it will call get_fluid_amount, get_remainder_timestamps, and parse_into_remainders to re-initialize remainders_fluid_not_taken array.
- Global variables
	- remainders_fluid_is_taken
	- remainders_fluid_not_taken
- Self-defined Objects
	- Object remainder 
		- Number fluid_amount
		- String unit
		- Object timestamp
	- Object timestamp
		- Number hour
		- Number minute
