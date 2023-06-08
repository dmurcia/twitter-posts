import express from 'express';
declare class App {
    app: express.Application;
    port: number;
    constructor(port: number);
    private initSettings;
    private initMiddlewares;
    private initRouters;
    listen(): void;
}
export default App;
//# sourceMappingURL=app.d.ts.map