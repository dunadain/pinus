import { ILifeCycle, Application } from 'pinus';

export default function () {
    return new Lifecycle();
}


class Lifecycle implements ILifeCycle {
    async beforeStartup(app: Application) {
        console.log(app.getServerId(), '!!!before startup');
    }

    async afterStartup(app: Application) {
        console.log(app.getServerId(), '!!afterStartup');
    }

    afterStartAll(app: Application): void {
        console.log(app.getServerId(), '!!after start all');
    }

    async beforeShutdown(app: Application, cancelShutDownTimer: () => void) {
        console.log(app.getServerId(), '!!beforeShutdown');
    }
}