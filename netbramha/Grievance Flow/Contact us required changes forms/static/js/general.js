 $(document).ready(function() {
    	//debugger;
    
	$("#refreshButton").click(function(){
	$.get('/contact-us/cp/getcaptcha',  
      function (data) {  // success callback
      
      var captcha ='data:image/png;base64,'+data[1];
      $("#hiddenCaptchaText").val(data[0])
          $("#captchaImage").attr("src",captcha);
	  $("#captchaImageSource").val(data[1])
    });
	});
	//setting template code
	if(document.body.contains(document.getElementById("hiddenTemplateCode")) && window.location.href.includes("newApplicationForm")){
	//debugger;
	var templateCodeAray = window.location.href.split("/");
	document.getElementById("hiddenTemplateCode").value =templateCodeAray[templateCodeAray.length -1]
	document.getElementById("hiddenTemplateCode").value = document.getElementById("hiddenTemplateCode").value.substring(0,document.getElementById("hiddenTemplateCode").value.length-1)
	}
    		 
    	  $('#img1').on("click",function(e){
    		   $('#p2').css("display","block");
    		  });

    		 $('#img2').on("click",function(e){
    		   $('#p3').css("display","block");
    		  });


    		 $('#img3').on("click",function(e){
    		   $('#p4').css("display","block");
    		  });

    		 $('#img4').on("click",function(e){
    			   $('#p5').css("display","block");
    			  });
    		 
    		 	  $('#removeImage2').on("click",function(e){
    		   $('#p2').css("display","none");
    		   $("#customFile1").val("");
    		  });

    		 $('#removeImage3').on("click",function(e){
    		   $('#p3').css("display","none");
    		   $("#customFile2").val("");
    		   
    		  });


    		 $('#removeImage4').on("click",function(e){
    		   $('#p4').css("display","none");
    		   $("#customFile3").val("");
    		   
    		  });

    		 $('#removeImage5').on("click",function(e){
    			   $('#p5').css("display","none");
    			   $("#customFile4").val("");
    			  });
    			  
    		
    	    var minBirthDate = new Date();
    	    minBirthDate.setFullYear(minBirthDate.getFullYear() - 18);

 		
 
    		$("#birthday").flatpickr({
    		dateFormat: "d/m/Y",
    		maxDate: minBirthDate
    		
    		});
    		
    			$(".2020Date").flatpickr({
    		dateFormat: "d/m/Y",
    		minDate: 2020-01,
    		maxDate: "today"
    		});
    		$(".normalDateOfPayment").flatpickr({
    		dateFormat: "d/m/Y",
    		maxDate: "today"
    		});

    });

$(document).on('keydown keyup paste', 'input[type=text]', function(e) {
	  var textArea = $('input[type=text]').val(),
	    textLenght = textArea.length,
	    limit = $('textarea').attr('maxlength'),
	    remain = '' + parseInt(limit - textLenght) + '';
	  $('#remain-title').text(remain);
	  if (textLenght > 1000) {
	    $('textarea').val((textArea).substring(0, limit))
	  }
	});
  
  // tex area maximum lenght
	$(document).on('keydown keyup paste', 'textarea', function(e) {
	  var textArea = $('textarea').val(),
	    textLenght = textArea.length,
	    limit = $('textarea').attr('maxlength'),
	    remain = '' + parseInt(limit - textLenght) + '';
	  $('#remain-description').text(remain);
	  // if (textLenght > 1000) {
	  //   $('textarea').val((textArea).substring(0, limit))
	  // }
	});

			 function getproofData()
					 {
 						var dpselected = document.getElementById("proofSelect").value;
 						if(dpselected == 1 || dpselected == 2 || dpselected == 3 || dpselected == 4 || dpselected == 5)    
 						{
 							document.getElementById("proofNumber").removeAttribute("disabled"); 
 						}
 						else if(dpselected == 0)    
 						{
 							document.getElementById("proofNumber").value = "";
 							document.getElementById("proofNumber").setAttribute("disabled", "disabled");
 						}
					 }
 


                 function Captcha() {
    //debugger;
    var existingCharactersLength = document.getElementById("textareadesc").value.length;
    document.getElementById("remain-description").textContent = 3000 - existingCharactersLength

        //document.getElementById("servicerequest").value = "";
        var isCaptchaErrorNull = (document.getElementById("errorCaptchaMessage") == null);
    if (isCaptchaErrorNull == false) {
        document.getElementById('errorCaptchaMessage').scrollIntoView();
        
         alert("In case you had uploaded document/s, please re-upload. Kindly ignore if the same is not applicable.");
        
    }
                 	
                     var alpha = new Array('1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
                     var i;
                     for (i=0;i<7;i++)
                     {
                       var a = alpha[Math.floor(Math.random() * alpha.length)];
                       var b = alpha[Math.floor(Math.random() * alpha.length)];
                       var c = alpha[Math.floor(Math.random() * alpha.length)];
                       var d = alpha[Math.floor(Math.random() * alpha.length)];
                       var e = alpha[Math.floor(Math.random() * alpha.length)];
                       var f = alpha[Math.floor(Math.random() * alpha.length)];
                       var g = alpha[Math.floor(Math.random() * alpha.length)];
                      }
                    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
                    document.getElementById("mainCaptcha").value = code;
                    
                  }
                
                 function ValidateSize(file) 
                 {
                     //debugger;  
                      var fileNameArray = []
                     var FileSize = file.files[0].size / 1024 / 1024; // in MB
                     var errorSpanID = file.id+"Error";
                     document.getElementById(errorSpanID).innerHTML="";
                     var array = ['jpg', 'jpeg', 'png', 'pdf'];  
                     var xyz=  file;  
                     var Extension = xyz.value.substring(xyz.value.lastIndexOf('.') + 1).toLowerCase();  
           
                     if (array.indexOf(Extension) <= -1) {  
                        document.getElementById(errorSpanID).innerHTML = 'Please upload document with the extension - pdf, jpeg, jpg, png '

                         $(file).val(''); //for clearing with Jquery
                         return false;  
                     }  
                     if (FileSize > 5) 
                     {
                       document.getElementById(errorSpanID).innerHTML = 'File size exceeds 5 MB'
                     
                        $(file).val(''); //for clearing with Jquery
                     } 

					var file1Name =""
					
					if(document.getElementById("customFile").files[0] != undefined){
						file1Name = document.getElementById("customFile").files[0].name
						fileNameArray[0] = file1Name
					}
					var file2Name =  ""
					
					if(document.getElementById("customFile1").files[0] != undefined){
						file2Name = document.getElementById("customFile1").files[0].name
						if(fileNameArray.includes(file2Name) == true){
						document.getElementById(errorSpanID).innerHTML = 'A File is already uploaded with same name. Kindly upload the file with different file name'

                        $(file).val(''); //for clearing with Jquery
						
						return false
						}
						else{
						fileNameArray[1] = file2Name
						}
						
					}
					
					var file3Name = ""
					if(document.getElementById("customFile2").files[0] != undefined){
						file3Name = document.getElementById("customFile2").files[0].name
							if(fileNameArray.includes(file3Name) == true){
						document.getElementById(errorSpanID).innerHTML = 'A File is already uploaded with same name. Kindly upload the file with different file name'

                        $(file).val(''); //for clearing with Jquery
						
						return false
						}
						else{
						fileNameArray[2] = file3Name
						}
							
							
					}
					var file4Name =""
					if(document.getElementById("customFile3").files[0] != undefined){
						file4Name = document.getElementById("customFile3").files[0].name
						
							if(fileNameArray.includes(file4Name) == true){
						document.getElementById(errorSpanID).innerHTML = 'A File is already uploaded with same name. Kindly upload the file with different file name'

                        $(file).val(''); //for clearing with Jquery
						
						return false
						}
						else{
						fileNameArray[3] = file4Name
						}
						
					}
					var file5Name = ""
					if(document.getElementById("customFile4").files[0] != undefined){
						file5Name = document.getElementById("customFile4").files[0].name
							if(fileNameArray.includes(file5Name) == true){
						document.getElementById(errorSpanID).innerHTML = 'A File is already uploaded with same name. Kindly upload the file with different file name'

                        $(file).val(''); //for clearing with Jquery
						
						return false
						}
						else{
						fileNameArray[4] = file5Name
						}
						
					}
					                  
                 }
                 
                 
                 function validateForm() 
                 {
                 
                	  var cname = document.forms["genaralQueryForm"]["customername"].value;
                	  var mobilenumber = document.forms["genaralQueryForm"]["mobile"].value;
                	  var emailaddress = document.forms["genaralQueryForm"]["email"].value;
                	  var proofNo = document.forms["genaralQueryForm"]["proofNumber"].value;
                	  var SRequest = document.forms["genaralQueryForm"]["servicerequest"].value;
                	  var DID = document.forms["genaralQueryForm"]["dispute_id"].value;
                	  var desc = document.forms["genaralQueryForm"]["textareadesc"].value;

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
						/*
                	  else if(emailaddress == "") 
                	  {
                	    document.getElementById("email").style.borderColor = "red";
                	    return false;
                	  }
                	  else if(proofNo == "") 
                	  {
                	    document.getElementById("proofNumber").style.borderColor = "red";
                	    return false;
                	  }
                	
                	  else if(DID == "") 
                	  {
                	    document.getElementById("dispute_id").style.borderColor = "red";
                	    return false;
                	  }*/
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
                 
 			function ValidateCommercialSize(file) 
                 {
                     debugger;  
                       var fileNameArray = []
                     var FileSize = file.files[0].size / 1024 / 1024; // in MB
                      var errorSpanID = file.id+"Error";
                     document.getElementById(errorSpanID).innerHTML="";
                     
                     var array = ['jpg', 'jpeg', 'png', 'pdf','xls','xlsx'];  
                     var xyz=  file;  
                     var Extension = xyz.value.substring(xyz.value.lastIndexOf('.') + 1).toLowerCase();  
           
                     if (array.indexOf(Extension) <= -1) {  
                       
                          document.getElementById(errorSpanID).innerHTML = 'Please upload document with the extension - pdf, xls, xlsx, jpeg, jpg, png '
                         
                         $(file).val(''); //for clearing with Jquery
                         return false;  
                     }  
                     if (FileSize > 5) 
                     {
                       document.getElementById(errorSpanID).innerHTML = 'File size exceeds 5 MB'
                         $(file).val(''); //for clearing with Jquery
                     } 
                     else 
                     {

                     }
                     
                     	var file1Name =""
					
					if(document.getElementById("customFile").files[0] != undefined){
						file1Name = document.getElementById("customFile").files[0].name
						fileNameArray[0] = file1Name
					}
					var file2Name =  ""
					
					if(document.getElementById("customFile1").files[0] != undefined){
						file2Name = document.getElementById("customFile1").files[0].name
						if(fileNameArray.includes(file2Name) == true){
						document.getElementById(errorSpanID).innerHTML = 'A File is already uploaded with same name. Kindly upload the file with different file name'

                        $(file).val(''); //for clearing with Jquery
						
						return false
						}
						else{
						fileNameArray[1] = file2Name
						}
						
					}
					
					var file3Name = ""
					if(document.getElementById("customFile2").files[0] != undefined){
						file3Name = document.getElementById("customFile2").files[0].name
							if(fileNameArray.includes(file3Name) == true){
						document.getElementById(errorSpanID).innerHTML = 'A File is already uploaded with same name. Kindly upload the file with different file name'

                        $(file).val(''); //for clearing with Jquery
						
						return false
						}
						else{
						fileNameArray[2] = file3Name
						}
							
							
					}
					var file4Name =""
					if(document.getElementById("customFile3").files[0] != undefined){
						file4Name = document.getElementById("customFile3").files[0].name
						
							if(fileNameArray.includes(file4Name) == true){
						document.getElementById(errorSpanID).innerHTML = 'A File is already uploaded with same name. Kindly upload the file with different file name'

                        $(file).val(''); //for clearing with Jquery
						
						return false
						}
						else{
						fileNameArray[3] = file4Name
						}
						
					}
					var file5Name = ""
					if(document.getElementById("customFile4").files[0] != undefined){
						file5Name = document.getElementById("customFile4").files[0].name
							if(fileNameArray.includes(file5Name) == true){
						document.getElementById(errorSpanID).innerHTML = 'A File is already uploaded with same name. Kindly upload the file with different file name'

                        $(file).val(''); //for clearing with Jquery
						
						return false
						}
						else{
						fileNameArray[4] = file5Name
						}
						
					}
					                  
                     
                 }

 				


function validateEmail(email) {
  const re = /^\w+([\+.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}
function renameFile(originalFile, newName) {
    return new File([originalFile], newName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
    });
}

function validate() {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    //$result.text(email + " is valid :)");
    //$result.css("color", "green");
  } else {
    $result.text(email + " is not valid :(");
    $result.css("color", "red");
  }
  return false;
}

$("#email").on("click", validate);
