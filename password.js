$(document).ready(function() {
    $("#generate").click(function() {
        generatePassword();
    });

    $("#copypass").click(function() {
        copyPassword();
    });
});

function generatePassword()
{
    let passwordlength = 12;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = uppercase.toLowerCase();
    const number = "0123456789";
    
    const allCharacters = uppercase + lowercase + number;

    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];


    while (passwordlength > password.length)
    {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];

    }

    $("#txtpassword").val(password);


}

function copyPassword()
{   
       // Get the password box element by ID
       var passwordBox = document.getElementById("txtpassword");
    
       // Select the text content
       passwordBox.select();
       
       // Copy the text to clipboard
       navigator.clipboard.writeText(passwordBox.value);
       
       alert("Copied the text: " + passwordBox.value);
}