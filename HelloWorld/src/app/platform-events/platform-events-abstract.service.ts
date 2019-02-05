import {ApplicationEventData} from "tns-core-modules/application";
import {ConfigPlatformEventsService} from "~/app/platform-events/config-platform-events-service";


export abstract class PlatformEventsAbstractService {
    // os: "iOS" | "Android";
    application;
    platform;

    constructor(private readonly logService: any, application) {
        this.application = application;
    }

    protected escucharEventos(config: ConfigPlatformEventsService) {
        if (config.launchEvent) {
            this.escucharLaunchEvent();
        }
    }

    protected escucharLaunchEvent() {
        this.application.on(this.application.resumeEvent, (data: ApplicationEventData) => {
            this.logService.i(data.eventName);
        })
    }
}