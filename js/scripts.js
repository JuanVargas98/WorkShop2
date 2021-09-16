var rowId = 0;

document.getElementById("petsave-button").onclick = function updateTable(){
    rowId += 1
    let petData = {
        dateRegister: document.getElementById("date-input").value,
        ownerName: document.getElementById("owner-input").value,
        petName: document.getElementById("petname-input").value,
        petMicrochip: document.getElementById("petmicrochip-input").value,
        petSpecies: document.getElementById("petspecies-input").value,
        petSize: document.getElementById("petsize-input").value,
        petSex: document.getElementById("petsex-input").value,
        petDangerous: document.getElementById("petdangerous-input").value,
        esterilizacion: document.getElementById("esterilizacion-input").value,
        petLocation: document.getElementById("petlocation-input").value
    }
    let tr = document.createElement("tr");
    tr.setAttribute("id","row"+rowId);

    let tdId = document.createElement("td");
    tdId.innerHTML = rowId;
    tr.appendChild(tdId);
    let inputs
    let num = 0
    let btnModificar = document.createElement("input");
    Object.keys(petData).forEach((key) => {
        num += 1
        let td = document.createElement("td");
        td.innerHTML = petData[key]
        tr.appendChild(td);
        
    });
    let tdActions = document.createElement("td");

    btnModificar.setAttribute("id", "update-" + rowId);
    btnModificar.setAttribute("type", "button");
    btnModificar.setAttribute("class", "btn btn-danger");
    btnModificar.value = "Modificar";
    /*btnModificar.onclick = function () {
        window.open("ListaMastcotas.html", "Ciudadanos de 4 patas", "width=800,height=600,scrollbars=NO")
        var mascotas = [];
        var table = document.getElementById("body-table");

        while (table.firstChild) {

            var aux = table.removeChild(table.firstChild);
            var mascota = {

                dateInput: aux.cells[0].value,
                ownerInput: aux.cells[1].value,
                petNameInput: aux.cells[2].value,
                petMicrochip: aux.cells[3].value,
                petSpeciesInput: aux.cells[4].value,
                petSexInput: aux.cells[5].value,
                petSizeInput: aux.cells[6].value,
                petDangerourInput: aux.cells[7].value,
                petSterilization: aux.cells[8].value,
                petLocalidad: aux.cells[9].value,
            }
            mascotas.push(mascota)
        }
        table.appendChild(titulo);
    }*/
    btnModificar.onclick = function () {
        
    }
    Object.keys(petData).forEach((key) => {
        let pet = "Datos: " + petData[key]
        document.cookie = pet
        console.log(document.cookie.split(";"))
    })
    tdActions.appendChild(btnModificar);
    tr.appendChild(tdActions);

    document.getElementById("body-table").appendChild(tr);
    
        
}