let botao = window.document.querySelector(".btn")
let texto = window.document.querySelector("#config")
let d  = window.document.querySelector(".d")



botao.addEventListener("click",verificarEmail)



function verificarEmail() {

    // Pega o valor do input de email
    let email = document.getElementById("email").value;
    
    // Expressão regular para verificar o formato do email
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    // Testa o email com a expressão regular
    if (regex.test(email)) {
        texto.style.display = "block"
        document.getElementById("config").textContent = "Email válido!";
        d.style.border = "1px solid var(--Pale-Blue)"
        texto.style.color = "#000"
    }

     else {
        texto.style.display = "block"
        document.getElementById("config").textContent = "Email inválido. Por favor, insira um email válido.";
        d.style.border = "1px solid rgba(255, 0, 0, 0.121)"
        }

}
