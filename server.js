const express = require('express');
const app = express();
const path = require('path');

// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'oimi', 'mapa.html'));
});

// Dados dos pontos de interesse
const points = [
    { name: "Praia de Boa Viagem", latlng: [-8.121999, -34.901051] },
    { name: "Marco Zero", latlng: [-8.062653, -34.871279] },
    { name: "Instituto Ricardo Brennand", latlng: [-8.047191, -34.959897] }
];

// Rota para obter os pontos de interesse
app.get('/api/points', (req, res) => {
    res.json(points);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
