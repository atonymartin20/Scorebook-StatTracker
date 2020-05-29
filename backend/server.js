const app = require('./app');

const PORT = process.env.PORT || '1111';

app.listen(PORT, () => {
    console.log(`\nListening on port ${PORT}\n`)
})