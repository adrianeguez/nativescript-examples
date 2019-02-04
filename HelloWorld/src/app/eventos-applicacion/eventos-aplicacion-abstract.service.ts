import {
    displayedEvent, exitEvent, launchEvent, lowMemoryEvent,
    orientationChangedEvent, resumeEvent, suspendEvent, uncaughtErrorEvent,
    ApplicationEventData, LaunchEventData, OrientationChangedEventData, UnhandledErrorEventData,
    on as applicationOn, run as applicationRun
} from "tns-core-modules/application";
import {EventEmitter} from "@angular/core";
import {NativeApplicationEventEmitter} from "~/app/eventos-applicacion/interfaces/launch-event-emitter";


export abstract class EventosAplicacionAbstractService {

    separador = '**********************';

    launchEvent = new EventEmitter<NativeApplicationEventEmitter>();

    suspendEvent = new EventEmitter<NativeApplicationEventEmitter>();

    resumeEvent = new EventEmitter<NativeApplicationEventEmitter>();

    displayEvent = new EventEmitter<NativeApplicationEventEmitter>();


    orientationChangedEvent = new EventEmitter<NativeApplicationEventEmitter>();

    exitEvent = new EventEmitter<NativeApplicationEventEmitter>();

    lowMemoryEvent = new EventEmitter<NativeApplicationEventEmitter>();

    uncaughtErrorEvent = new EventEmitter<NativeApplicationEventEmitter>();


    constructor(private readonly _log: any, separador?:string) {
        if(separador){
            this.separador = separador
        }
        this.escucharEventos();

    }

    escucharEventos() {
        this._log.i(`${this.separador} EMPEZANDO A ESCUCHAR EVENTOS ${this.separador}`);
        applicationOn(launchEvent, (args: LaunchEventData) => {
            this._log.i(`${this.separador} LAUNCH_EVENT ${this.separador}`);
            this._log.i("For Android applications, args.android is an android.content.Intent class.");
            this._log.i("For iOS applications, args.ios is NSDictionary (launchOptions).");
            this.launchEvent.emit({
                iOS: args.ios,
                android: args.android,
                args
            });
        });

        applicationOn(suspendEvent, (args: ApplicationEventData) => {
            this._log.i(`${this.separador} SUSPEND_EVENT ${this.separador}`);
            this._log.i("For Android applications, args.android is an android activity class.");
            this._log.i("For iOS applications, args.ios is UIApplication.");
            this.suspendEvent.emit({
                iOS: args.ios,
                android: args.android,
                args
            });
        });

        applicationOn(resumeEvent, (args: ApplicationEventData) => {
            this._log.i(`${this.separador} RESUME_EVENT ${this.separador}`);
            this._log.i("For Android applications, args.android is an android activity class.");
            this._log.i("For iOS applications, args.ios is UIApplication.");
            this.resumeEvent.emit({
                iOS: args.ios,
                android: args.android,
                args
            });
        });

        applicationOn(displayedEvent, (args: ApplicationEventData) => {
            this._log.i(`${this.separador} DISPLAY_EVENT ${this.separador}`);
            this.displayEvent.emit({
                iOS: args.ios,
                android: args.android,
                args
            });
        });

        applicationOn(orientationChangedEvent, (args: OrientationChangedEventData) => {
            this._log.i(`${this.separador} ORIENTATION_CHANGED_EVENT ${this.separador}`);

            this.suspendEvent.emit({
                iOS: args.ios,
                android: args.android,
                args,
                orientation: args.newValue
            });
        });

        applicationOn(exitEvent, (args: ApplicationEventData) => {
            this._log.i(`${this.separador} EXIT_EVENT ${this.separador}`);
            this._log.i("For Android applications, args.android is an android activity class.");
            this._log.i("For iOS applications, args.ios is UIApplication.");
            this.suspendEvent.emit({
                iOS: args.ios,
                android: args.android,
                args
            });
        });

        applicationOn(lowMemoryEvent, (args: ApplicationEventData) => {
            this._log.w(`${this.separador} LOW_MEMORY_EVENT ${this.separador}`);
            this._log.i("For Android applications, args.android is an android activity class.");
            this._log.i("For iOS applications, args.ios is UIApplication.");
            this.suspendEvent.emit({
                iOS: args.ios,
                android: args.android,
                args
            });
        });

        applicationOn(uncaughtErrorEvent, function (args: UnhandledErrorEventData) {
            this._log.e(`${this.separador} UNCAUGHT_ERROR_EVENT ${this.separador}`);
            this.suspendEvent.emit({
                iOS: args.ios,
                android: args.android,
                args,
                error: args.error
            });
        });

    }


}