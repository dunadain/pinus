import { Application, IComponent } from "pinus";


export class TestComponent implements IComponent {
    name = "TestComponent";
    app: Application;

    constructor(app: Application) {
        this.app = app;
        this.app.set(this.name, this)
    }

    start() {
        console.log("TestComponent  start", this.app.getServerId())
        return Promise.resolve();
    }

    stop(force: boolean) {
        console.log("TestComponent stop", force, this.app.getServerId())
        return Promise.resolve();
    }
}