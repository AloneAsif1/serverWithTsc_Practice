import express, {} from 'express';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    console.log(res);
    res.send("Hello from Asif");
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send("Success buddy");
});
export default app;
//# sourceMappingURL=app.js.map