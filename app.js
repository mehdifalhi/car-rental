var updateElement
url_input = document.getElementById("urlInpt")
marque_v = document.getElementById("mrInpt")
prixV = document.getElementById("prixInpt")
modelV = document.getElementById("modelInpt")



function ajouteCars() {

    url_inputValue = document.getElementById("urlInptj").value
    marque_vValue = document.getElementById("mrInptj").value
    prixVValue = document.getElementById("prixInptj").value
    modelVValue = document.getElementById("modelInptj").value

    ajout = document.getElementById("insert")

    if (url_inputValue == "" || marque_vValue == "" || prixVValue == "" || modelVValue == "") {
        alert("enter please")

    } else {
        var cardTag =
            `   
     <div class="card  mt-3 ms-2" style="width: 18rem;">
    <img src="${url_inputValue}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title carlist">${marque_vValue}</h4>
      <h6 class="card-title">Price : ${prixVValue}</h6>
      <h6 class="card-title">Model : ${modelVValue}</h6>
      <button type="button" class="btn btn-danger m-1 float-end" onclick="deleteCars(this)"><i class="fas fa-trash-alt"> </i> DEL</button>
                  <button type="button" class="btn btn-success m-1 float-end" onclick="editCars(this)" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                    <i class="fas fa-edit"></i>Edit
                  </button>
    </div>
    </div> 
   `

        ajout.innerHTML += cardTag
        
        document.getElementById("closeWin").click()
    }
    document.getElementById("urlInptj").value = ""
    document.getElementById("mrInptj").value = ""
    document.getElementById("prixInptj").value = ""
    document.getElementById("modelInptj").value = ""

}

function deleteCars(x) {
    if (confirm("Are you sure that you want to delete this")) {
        x.parentElement.parentElement.remove()
    }


}

function filtrage() {
    mon_cle = document.getElementById("inpCle").value;
    car_list = document.getElementsByClassName("carlist");

    for (i = 0; i < car_list.length; i++) {
        if (!car_list[i].textContent.toLowerCase().includes(mon_cle.toLowerCase())) {
            car_list[i].parentElement.parentElement.style.display = "none";
        } else {
            car_list[i].parentElement.parentElement.style.display = "block";
        }
    }
}

function editCars(x) {

    console.log(x.parentElement.parentElement.children[0].src)

    updateElement = x
    urlEdit = x.parentElement.parentElement.children[0].src
    marqEdit = x.parentElement.children[0].textContent
    prixEdit = x.parentElement.children[1].textContent
    modelEdit = x.parentElement.children[2].textContent

    url_input.value = urlEdit
    marque_v.value = marqEdit
    prixV.value = prixEdit
    modelV.value = modelEdit


}

function updateCars() {

    url_input1 = document.getElementById("urlInpt").value
    marque_v1 = document.getElementById("mrInpt").value
    prixV1 = document.getElementById("prixInpt").value
    modelV1 = document.getElementById("modelInpt").value
    console.log(url_input)
    console.log(marque_v)
    console.log(prixV)
    console.log(modelV)
    updateElement.parentElement.parentElement.children[0].src = url_input1
    updateElement.parentElement.children[0].textContent = marque_v1
    updateElement.parentElement.children[1].textContent = prixV1
    updateElement.parentElement.children[2].textContent = modelV1

}