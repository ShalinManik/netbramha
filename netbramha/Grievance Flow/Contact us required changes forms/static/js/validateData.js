$(document).ready(function() {
    $(".fancybox").fancybox();
    if ($("#isSuccess").val() === "success") {
        $("[href='#successMessage']").click()
    }
});
function validateIDno() {
    if ($("#idtype").val() === "") {
        $("#idtype").attr("validationrule", '{"required":true}');
        $("#idtype").attr("validationmessages", '{"required": "Please select a Type of Identity Proof "}')
    } else {
        if ($("#idtype").val() === "1") {
            $("#files1").attr("validationrule", '{"required":true}');
            $("#files1").attr("validationmessages", '{"required": "Please select atleast one file to upload "}');
            $("#identityno").attr("validationrule", '{"required":true,"pancard":true}');
            $("#identityno").attr("validationmessages", '{"required": "Please enter Income Tax ID Number " ,"pancard" : "PAN Number entered is invalid. Please check and enter the correct value. "}')
        } else {
            if ($("#idtype").val() === "2") {
                $("#files1").attr("validationrule", '{"required":true}');
                $("#files1").attr("validationmessages", '{"required": "Please select atleast one file to upload "}');
                $("#identityno").attr("validationrule", '{"required":true,"passport":true}');
                $("#identityno").attr("validationmessages", '{"required": "Please enter Passport Number" ,"passport" : "Passport Number entered is invalid. Please check and enter the correct value. "}')
            } else {
                if ($("#idtype").val() === "3") {
                    $("#files1").attr("validationrule", '{"required":true}');
                    $("#files1").attr("validationmessages", '{"required": "Please select atleast one file to upload "}');
                    $("#identityno").attr("validationrule", '{"required":true,"voterid":true}');
                    $("#identityno").attr("validationmessages", '{"required": "Please enter Voter ID Number " ,"voterid" : "Voter\'s ID should have atleast 10 characters where the first 2 or first 3 characters must be alphabets and the remaining characters must be numbers. "}')
                } else {
                    if ($("#idtype").val() === "4") {
                        $("#files1").attr("validationrule", '{"required":true}');
                        $("#files1").attr("validationmessages", '{"required": "Please select atleast one file to upload "}');
                        $("#identityno").attr("validationrule", '{"required":true,"driverlicence":true}');
                        $("#identityno").attr("validationmessages", '{"required": "Please enter Driver\'s License Number " ,"driverlicence" : "Driver\'s License Number entered is invalid. Please check and enter the correct value. "}')
                    } else {
                        if ($("#idtype").val() === "5") {
                            $("#files1").attr("validationrule", '{"required":true}');
                            $("#files1").attr("validationmessages", '{"required": "Please select atleast one file to upload "}');
                            $("#identityno").attr("validationrule", '{"required":true,"uid":true}');
                            $("#identityno").attr("validationmessages", '{"required": " UID is required " ,"uid" : "Please enter valid UID  number "}')
                        } else {
                            if ($("#idtype").val() === "6") {
                                $("#files1").attr("validationrule", '{"required":true}');
                                $("#files1").attr("validationmessages", '{"required": "Please select atleast one file to upload "}');
                                $("#identityno").attr("validationrule", '{"required":true,"rationcard":true}');
                                $("#identityno").attr("validationmessages", '{"required": " Ration Card is required " ,"rationcard" : "Please enter valid Ration Card number "}')
                            }
                        }
                    }
                }
            }
        }
    }
}
function validateAddressno() {
    if ($("#addresstype").val() === "") {
        $("#addresstype").attr("validationrule", '{"required":true}');
        $("#addresstype").attr("validationmessages", '{"required": "Please select the Type of Address Proof. "}')
    }
    if ($("#addresstype").val() === "1") {
        $("#files2").attr("validationrule", '{"required":true}');
        $("#files2").attr("validationmessages", '{"required": "Please select atleast one file to upload "}')
    } else {
        if ($("#addresstype").val() === "2") {
            $("#files2").attr("validationrule", '{"required":true}');
            $("#files2").attr("validationmessages", '{"required": "Please select atleast one file to upload "}')
        } else {
            if ($("#addresstype").val() === "3") {
                $("#files2").attr("validationrule", '{"required":true}');
                $("#files2").attr("validationmessages", '{"required": "Please select atleast one file to upload "}')
            } else {
                if ($("#addresstype").val() === "4") {
                    $("#files2").attr("validationrule", '{"required":true}');
                    $("#files2").attr("validationmessages", '{"required": "Please select atleast one file to upload "}')
                } else {
                    if ($("#addresstype").val() === "5") {
                        $("#files2").attr("validationrule", '{"required":true}');
                        $("#files2").attr("validationmessages", '{"required": "Please select atleast one file to upload "}')
                    } else {
                        if ($("#addresstype").val() === "6") {
                            $("#files2").attr("validationrule", '{"required":true}');
                            $("#files2").attr("validationmessages", '{"required": "Please select atleast one file to upload "}')
                        } else {
                            if ($("#addresstype").val() === 7) {
                                $("#files2").attr("validationrule", '{"required":true}');
                                $("#files2").attr("validationmessages", '{"required": "Please select atleast one file to upload "}')
                            }
                        }
                    }
                }
            }
        }
    }
}
function submitData() {
    $(".inline_error").empty();
    $(".inline_error").hide();
    $(".inline_success").hide();
    var c = $("#email").val();
    var h = $("#dob").val();
    $("#hiddenEmail").val(c);
    $("#hiddenDob").val(h);
    validateAddressno();
    validateIDno();
    var j = $("#kaptcha").val();
    $("#kaptcha1").val(j);
    var g = false
      , f = false;
    $("#kaptcha").attr("validationrule", '{"required":true}');
    $("#kaptcha").attr("validationmessages", '{"required": "Please Enter Text Shown In Image."}');
    if ($("#file1").val() === undefined || $("#file1").val() === "") {
        f = true;
        $("#file1").attr("validationrule", '{"required":true}');
        $("#file1").attr("validationmessages", '{"required": " Please select the Type of Identity Proof.  "}')
    } else {
        if ($("#file1").val() !== undefined && $("#file1").val() !== "" && $("#file1").val() !== null) {
            f = true;
            $("#file1").attr("validationrule", '{"filetypeError":true,"filesizeError":true}');
            $("#file1").attr("validationmessages", '{"filetypeError":"Please upload a .pdf, .jpg or .png file.","filesizeError":"Size of Uploaded File should not exceed 2MB"}')
        } else {
            $("#file1").removeAttr("validationrule");
            $("#file1").removeAttr("validationmessages")
        }
    }
    if ($("#file11").val() !== undefined && $("#file11").val() !== "" && $("#file11").val() !== null) {
        f = true;
        $("#file11").attr("validationrule", '{"filetypeError":true,"filesizeError":true}');
        $("#file11").attr("validationmessages", '{"filetypeError":"Please upload a .pdf, .jpg or .png file.","filesizeError":"Size of Uploaded File should not exceed 2MB"}')
    } else {
        $("#file11").removeAttr("validationrule");
        $("#file11").removeAttr("validationmessages")
    }
    if ($("#file12").val() !== undefined && $("#file12").val() !== "" && $("#file12").val() !== null) {
        f = true;
        $("#file12").attr("validationrule", '{"filetypeError":true,"filesizeError":true}');
        $("#file12").attr("validationmessages", '{"filetypeError":"Please upload a .pdf, .jpg or .png file.","filesizeError":"Size of Uploaded File should not exceed 2MB"}')
    } else {
        $("#file12").removeAttr("validationrule");
        $("#file12").removeAttr("validationmessages")
    }
    if ($("#file13").val() !== undefined && $("#file13").val() !== "" && $("#file13").val() !== null) {
        f = true;
        $("#file13").attr("validationrule", '{"filetypeError":true,"filesizeError":true}');
        $("#file13").attr("validationmessages", '{"filetypeError":"Please upload a .pdf, .jpg or .png file.","filesizeError":"Size of Uploaded File should not exceed 2MB"}')
    } else {
        $("#file13").removeAttr("validationrule");
        $("#file13").removeAttr("validationmessages")
    }
    if ($("#file2").val() === undefined || $("#file2").val() === "") {
        f = true;
        $("#file2").attr("validationrule", '{"required":true}');
        $("#file2").attr("validationmessages", '{"required": " Please select the Address Proof file to be uploaded.  "}')
    } else {
        if ($("#file2").val() !== undefined && $("#file2").val() !== "" && $("#file2").val() !== null) {
            f = true;
            $("#file2").attr("validationrule", '{"filetypeError":true,"filesizeError":true}');
            $("#file2").attr("validationmessages", '{"filetypeError":"The selected Address Proof File Format cannot be accepted. Please upload a .pdf, .jpg or .png file.","filesizeError":"The File Size of the selected Address Proof file exceeds the maximum limit. You can upload a file with file size upto 2 MB."}')
        } else {
            $("#file2").removeAttr("validationrule");
            $("#file2").removeAttr("validationmessages")
        }
    }
    if ($("#file21").val() !== undefined && $("#file21").val() !== "" && $("#file21").val() !== null) {
        f = true;
        $("#file21").attr("validationrule", '{"filetypeError":true,"filesizeError":true}');
        $("#file21").attr("validationmessages", '{"filetypeError":"The selected Address Proof File Format cannot be accepted. Please upload a .pdf, .jpg or .png file.","filesizeError":"The File Size of the selected Address Proof file exceeds the maximum limit. You can upload a file with file size upto 2 MB."}')
    } else {
        $("#file21").removeAttr("validationrule");
        $("#file21").removeAttr("validationmessages")
    }
    if ($("#file22").val() !== undefined && $("#file22").val() !== "" && $("#file22").val() !== null) {
        f = true;
        $("#file22").attr("validationrule", '{"filetypeError":true,"filesizeError":true}');
        $("#file22").attr("validationmessages", '{"filetypeError":"The selected Address Proof File Format cannot be accepted. Please upload a .pdf, .jpg or .png file.","filesizeError":"The File Size of the selected Address Proof file exceeds the maximum limit. You can upload a file with file size upto 2 MB."}')
    } else {
        $("#file22").removeAttr("validationrule");
        $("#file22").removeAttr("validationmessages")
    }
    if ($("#file23").val() !== undefined && $("#file23").val() !== "" && $("#file23").val() !== null) {
        f = true;
        $("#file23").attr("validationrule", '{"filetypeError":true,"filesizeError":true}');
        $("#file23").attr("validationmessages", '{"filetypeError":"The selected Address Proof File Format cannot be accepted. Please upload a .pdf, .jpg or .png file.","filesizeError":"The File Size of the selected Address Proof file exceeds the maximum limit. You can upload a file with file size upto 2 MB."}')
    } else {
        $("#file23").removeAttr("validationrule");
        $("#file23").removeAttr("validationmessages")
    }
    var d = $("#divTag").validate();
    var k = $.parseJSON(d);
    if (k.success) {
        $("#email").prop("disabled", false);
        $("#dob").prop("disabled", false);
        $("#idForm").submit()
    } else {
        $(".success").hide();
        $("#error-msg").show();
        a();
        for (var e = 0; e < k.data.length; e++) {
            $("#" + k.data[e].field + "Error").html(k.data[e].messageType.error);
            $("#" + k.data[e].field + "Error").attr("style", "display:block")
        }
        if (g) {
            $("#idFile1").show()
        } else {
            $("#idFile1").hide()
        }
        if (f) {
            $("#addFile1").show()
        } else {
            $("#addFile1").hide()
        }
        return false
    }
    function b(l) {
        $("#kaptcha").val("");
        $("#kaptcha").attr("validationrule", '{"required":true}');
        $("#kaptcha").attr("validationmessages", '{"required": "The CAPTCHA Image you have entered does not match with the Image.."}');
        var i = $("#consumer-captcha-box").validate();
        $(".success").hide();
        $("#error-msg").show();
        $("#kaptchaError").html("The CAPTCHA Image you have entered does not match with the Image.");
        $("#kaptchaError").attr("style", "display:block")
    }
    function a() {
        try {
            kaptchaImageSrc = $("#kaptchaImage").attr("src");
            $("#kaptchaImage").attr("src", "./kaptcha.jpg?" + Math.floor(Math.random() * 100));
            $("#kaptcha").val("")
        } catch (i) {
            alert(i)
        }
    }
}
function changetextForSelect(a) {
    a.parent().find("div.select").attr("style", "none")
}
$(function() {
    $("#file1").change(function() {
        $("#files1").val($("#file1").val()).show()
    });
    $("#file2").change(function() {
        $("#files2").val($("#file2").val()).show()
    });
    $("#file11").change(function() {
        $("#files11").val($("#file11").val()).show()
    });
    $("#file12").change(function() {
        $("#files12").val($("#file12").val()).show()
    });
    $("#file13").change(function() {
        $("#files13").val($("#file13").val()).show()
    });
    $("#file21").change(function() {
        $("#files21").val($("#file21").val()).show()
    });
    $("#file22").change(function() {
        $("#files22").val($("#file22").val()).show()
    });
    $("#file23").change(function() {
        $("#files23").val($("#file23").val()).show()
    })
});
function attachMoreFiles(c) {
    var b = c.substring(c.length - 2);
    var a = c.substring(0, c.length - 2);
    if (a === "idProofFileUpload") {
        $("#idProofAttach" + b).css("display", "none");
        $("#" + c).css("display", "block")
    }
    if (a === "addressProofFileUpload") {
        $("#addressProofAttach" + b).css("display", "none");
        $("#" + c).css("display", "block")
    }
}
;