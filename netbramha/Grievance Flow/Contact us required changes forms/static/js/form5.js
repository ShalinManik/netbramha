 function validateForm5() 
                 {
                	  var cname = document.forms["form5"]["customername"].value;
                	  var mobilenumber = document.forms["form5"]["mobile"].value;
                	  var emailaddress = document.forms["form5"]["email"].value;
                	  var proofNo = document.forms["form5"]["proofNumber"].value;
                	  var SRequest = document.forms["form5"]["servicerequest"].value;
                	  var desc = document.forms["form5"]["textareadesc"].value;

                	  if(cname == "") 
                	  {
						document.getElementById('errorname').innerHTML = "Please enter customer name";
                	    //return false;
                	  }
					  if(cname.length <= 5) 
                	  {
					    document.getElementById('errorname').innerHTML = "Customer name more than 5 chacter";
                	    //return false;
                	  }
 					  if(mobilenumber.length != 10)
				      {
					    document.getElementById('errormobile').innerHTML = "invalid mobile number";
                	    //return false;

				      }
					  if(isNaN(mobilenumber))
					  {
						document.getElementById('errormobile').innerHTML = "please enter digits only";
						//return false;
					  }
  					//if(SRequest.length <= 8 && SRequest.length >= 4) 
					if(SRequest == "") 
				    {
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
						document.getElementById('errordesc').innerHTML = "please enter description";
						return false;
                	  }
                	}
                 
