var rowId = 0;
document.getElementById("petsave-button").onclick = function updateTable(){
    rowId += 1
    let petData = {
        dateRegister: document.getElementById("date-input").value,
        ownerName: document.getElementById("owner-input").value,
        petName: document.getElementById("petname-input").value,
        petMicrochip: document.getElementById("petMicrochip-input").value,
        petSpecies: document.getElementById("petspecies-input").value,
        petSize: document.getElementById("petsize-input").value,
        petSex: document.getElementById("petsex-input").value,
        petDangerous: document.getElementById("petdangerous-input").value,
        esterilizacion: document.getElementById("esterilizacion-input").value,
        petLocation: document.getElementById("petlocation-input").value,
        petBreed: document.getElementById("petBreed-input").value
    }
    Object.keys(petData).forEach((key) => {
        let pet = "Datos: " + petData[key]
        document.cookie = pet
        console.log(document.cookie.split(";"))
    })
    
}