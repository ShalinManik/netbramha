				 function validate_Form2() 
                 {
						  
	                	  var SRequest = document.forms["form2"]["servicerequest"].value;
	                	  var desc = document.forms["form2"]["textareadesc"].value;
	
		                	
						 if(SRequest == "") 
						 {
							//alert("Test");
						    document.getElementById('errorSR').innerHTML = "Services request min 4 and max 8";
							//return false;		 
						 }
						 if(isNaN(SRequest))
						 {
							document.getElementById('errorSR').innerHTML = "please enter digits only";
							//return false;	 
						 }
	                	 if(desc == "") 
	                	 {
							//alert("hello");
							document.getElementById('errordesc').innerHTML = "please enter description";
							return false;
		               	 }
					}

 				
 				