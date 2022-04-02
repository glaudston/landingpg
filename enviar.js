
function enviar(){
    var nome = document.getElementById('nome').value;
    var emailDestinoUsuario = document.getElementById('email').value;

    var emailDestinoSemeia = "glaudstonalan@gmail.com";

    //email enviado para o glaudstonalan@gmail.com
    MailApp.sendEmail(emailDestinoSemeia, assunto, emailBody);

    //email enviado para o usuário que se cadastrou para receber as novidades
    MailApp.sendEmail(emailDestinoUsuario, assunto, emailBody);

    document.alert("Olá "+nome+" Semeia Flores e Plantas agradece seu interesse. Em breve você receberá mais informações sobre as novidades!");
}