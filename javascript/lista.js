const $add = document.getElementById("add");
const $list = document.querySelector(".list-product");
const $input = document.getElementById("input");



// selecciona todos los botones de eliminar existentes y añade un evento de click a cada uno
document.querySelectorAll('.delete').forEach(function(boton) {
    boton.addEventListener('click', function(event) {
      // Cuando se hace click en el botón de eliminar, elimina el elemento de la lista
      event.target.parentNode.remove();
    });
  });





$add.addEventListener("click", (e) => {
    e.preventDefault();
//valida que el input no este vacio
    if($input.value.trim() === ""){
        $input.value = "";
        return;
    }
    //crea un nuevo elemento de la lista y el boton eliminar.
    const li = document.createElement("li");
    const button = document.createElement("button");
    //le agrego la clase al boton
    button.classList.add("delete");

    //le agrego un evento de click para eliminar el nodo padre
    button.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })

    //les agrego sus textos 
    li.textContent = $input.value;
    button.textContent = "Eliminar"; 
    $input.value = "";

    //los agrego a la lista
    li.appendChild(button);
    $list.appendChild(li);
})