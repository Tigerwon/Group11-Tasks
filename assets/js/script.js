
        function validate()
        {
            var username = document.getElementbyID("uname");
            var password = document.getElementbyID("pass");
        
            if(username.value = ""||password.value=="")
            { 
                alert("No blank values allowed");
                 return false;
        
            }
            else
            {
                true;
            }
        }
        
        