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
        petLocation: document.getElementById("petlocation-input").value,
        petBreed: document.getElementById("petBreed-input").value
    }
    let tr = document.createElement("tr");
    tr.setAttribute("id","row"+rowId);

    let tdId = document.createElement("td");
    tdId.innerHTML = rowId;
    tr.appendChild(tdId);

    Object.keys(pet).forEach((key) => {
        console.log(key);
        let td = document.createElement("td");
        td.innerHTML = pet[key];
        tr.appendChild(td);
    });
    let tdAction = document.createElement("td");

    let input = document.createElement("input");
    input.setAttribute("id", "upsate-" + rowId);
    input.setAttribute("type", "button");
    input.value = "Modificar";
    input.onclick = function () {
    }

    Object.keys(petData).forEach((key) => {
        let pet = "Datos: " + petData[key]
        document.cookie = pet
        console.log(document.cookie.split(";"))
    })
        tdActions.appendChild(input);
        tr.appendChild(tdActions);

        document.getElementById("body-table").appendChild(tr);

    function renderizarTabla() {
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
            mascotas.push(
                mascota
            )
        }
        table.appendChild(titulo);

    
    }
}