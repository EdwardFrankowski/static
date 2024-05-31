const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Указываем Express обслуживать статические файлы из папки "out"
app.use(express.static(path.join(__dirname, 'dist')));

// Обслуживаем index.html по умолчанию для всех маршрутов
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
