document.addEventListener("DOMContentLoaded", function() {

  const btnEntrar = document.getElementById("btnEntrar");

  btnEntrar.addEventListener("click", function (event) {
    
    event.preventDefault(); 

    const urlInput = document.getElementById("url");
    const emailInput = document.getElementById("email");
    const nicknameInput = document.getElementById("nickname");

    const url = urlInput.value.trim();
    const email = emailInput.value.trim();
    const nickname = nicknameInput.value.trim();

    if (url && email && nickname) {
      localStorage.setItem("chat_url", url);
      localStorage.setItem("chat_email", email);
      localStorage.setItem("chat_nickname", nickname);

      console.log("Dados salvos no Local Storage com sucesso!");
      console.log(`URL: ${url}`);
      console.log(`E-mail: ${email}`);
      console.log(`Nickname: ${nickname}`);

      alert("Dados de inscrição salvos com sucesso!");

    } else {
      alert("Por favor, preencha todos os campos.");
      console.log("Tentativa de envio com campos vazios.");
    }
  });

});