import app from './app.js';
const PORT = 500;
let server;
async function bootstrap() {
    server = app.listen(PORT, () => {
        console.log("running on ", PORT);
    });
}
bootstrap();
//# sourceMappingURL=server.js.map