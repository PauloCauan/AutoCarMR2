
document.getElementById("marca").addEventListener("change", function () {
    const modelosPorMarca = {
        Ford: ["Focus", "Fiesta", "EcoSport"],
        Tesla: ["Model S", "Model X", "Model 3"],
        Volkswagen: ["Golf", "Polo", "Tiguan"],
    };

    const marcaSelecionada = this.value;
    const modeloSelect = document.getElementById("modelo");

    modeloSelect.innerHTML = '<option value="" disabled selected>Selecione o Modelo</option>';

    if (modelosPorMarca[marcaSelecionada]) {
        modelosPorMarca[marcaSelecionada].forEach(modelo => {
            const option = document.createElement("option");
            option.value = modelo;
            option.textContent = modelo;
            modeloSelect.appendChild(option);
        });
    }
});
