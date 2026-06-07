const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/launch-ride', (req, res) => {
    res.setHeader('Clear-Site-Data', '"cache", "cookies", "storage"');
    const targetUrl = "https://auth.uber.com/v2/?next_url=https%3A%2F%2Fm.uber.com%2Fgo%2Flogin-redirect";
    res.redirect(targetUrl);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

