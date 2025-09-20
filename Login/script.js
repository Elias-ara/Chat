document.addEventListener("DOMContentLoaded", function () {
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
      //criando o objeto com os dados do login JSON
      const loginData = {
        nickname: nickname,
        email: email,
      };

      //enviando os dados para o servidor
      fetch("http://10.10.128.56:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        localStorage.setItem("chat_url", url);
        localStorage.setItem("chat_email", email);
        localStorage.setItem("chat_nickname", nickname);

        console.log("Dados salvos no Local Storage com sucesso!");
        console.log(`URL: ${url}`);
        console.log(`E-mail: ${email}`);
        console.log(`Nickname: ${nickname}`);

        alert("Dados de inscrição salvos com sucesso!");

        window.location.href = "/chat/chat.html";

        return response.json();
      });
    } else {
      alert("Por favor, preencha todos os campos.");
      console.log("Tentativa de envio com campos vazios.");
    }
  });
});
