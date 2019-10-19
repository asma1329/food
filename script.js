
function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}
function verifNum(champ)
{
   if(isNaN(champ.value) == true || champ.value.length != 8  )
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

 /*var mots = $.trim($(champ).val()).split(" ");*/
   
 function verifMsg(champ) {
     var exp=new RegExp("[a-zA-Z0-9éèêëàáâäóòôöíìîïçÉÈÊËÀÁÂÄÒÓÔÖÌÍÎÏÇ-]+","g");
     var tabNom=champ.value.match(exp);
     if (tabNom.length <= 20)
     {
        surligne(champ, true);
        return false;
     }
     else
     {
        surligne(champ, false);
        return true;
     }
  };

function verifName(champ)
{
   if(champ.value.length < 3 || champ.value.charAt(0).toUpperCase()!= champ.value.charAt(0))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}
function verifForm(f)
{
   var nameOk = verifName(f.name);
   var mailOk = verifMail(f.email);
   var numOk = verifNum(f.num);
   var msgOk = verifMsg(f.msg)
   
   if(nameOk && mailOk && numOk & msgOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}
function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}