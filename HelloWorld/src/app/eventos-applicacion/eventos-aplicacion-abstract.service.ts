import {
    displayedEvent,
    exitEvent,
    launchEvent,
    lowMemoryEvent,
    orientationChangedEvent,
    resumeEvent,
    suspendEvent,
    uncaughtErrorEvent,
    ApplicationEventData,
    LaunchEventData,
    OrientationChangedEventData,
    UnhandledErrorEventData,
    on as applicationOn,
    run as applicationRun,
    android,
    AndroidApplication,
    AndroidActivityBundleEventData,
    AndroidActivityEventData,
    AndroidActivityResultEventData,
    AndroidActivityBackPressedEventData
} from "tns-core-modules/application";
import {EventEmitter} from "@angular/core";
import {NativeApplicationEventEmitter} from "~/app/eventos-applicacion/interfaces/launch-event-emitter";
import {EventAndroid} from "~/app/eventos-applicacion/interfaces/event-android";
import {ios} from "tns-core-modules/application";



export abstract class EventosAplicacionAbstractService {

    separador = '**********************';
    separadorAndroid = '----------------------';


    launchEvent = new EventEmitter<NativeApplicationEventEmitter>();

    suspendEvent = new EventEmitter<NativeApplicationEventEmitter>();

    resumeEvent = new EventEmitter<NativeApplicationEventEmitter>();

    displayEvent = new EventEmitter<NativeApplicationEventEmitter>();


    orientationChangedEvent = new EventEmitter<NativeApplicationEventEmitter>();

    exitEvent = new EventEmitter<NativeApplicationEventEmitter>();

    lowMemoryEvent = new EventEmitter<NativeApplicationEventEmitter>();

    uncaughtErrorEvent = new EventEmitter<NativeApplicationEventEmitter>();

    activityCreatedEvent = new EventEmitter<EventAndroid>();

    activityDestroyedEvent = new EventEmitter<EventAndroid>();

    activityStartedEvent = new EventEmitter<EventAndroid>();

    activityPausedEvent = new EventEmitter<EventAndroid>();

    activityResumedEvent = new EventEmitter<EventAndroid>();

    activityStoppedEvent = new EventEmitter<EventAndroid>();

    saveActivityStateEvent = new EventEmitter<EventAndroid>();

    activityResultEvent = new EventEmitter<EventAndroid>();

    activityBackPressedEvent = new EventEmitter<EventAndroid>();


    constructor(private readonly _log: any, separador?: string) {
        if (separador) {
            this.separador = separador
        }
        this.escucharEventos();
    }

    escucharEventos() {
        this._log.i(`${this.separador} EMPEZANDO A ESCUCHAR EVENTOS ${this.separador}`);
        this.escucharEventosDeAplicacion();
        this.escucharEventosAndroid();






    }

    escucharEventosDeAplicacion() {
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

            this.orientationChangedEvent.emit({
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
            this.exitEvent.emit({
                iOS: args.ios,
                android: args.android,
                args
            });
        });

        applicationOn(lowMemoryEvent, (args: ApplicationEventData) => {
            this._log.w(`${this.separador} LOW_MEMORY_EVENT ${this.separador}`);
            this._log.i("For Android applications, args.android is an android activity class.");
            this._log.i("For iOS applications, args.ios is UIApplication.");
            this.lowMemoryEvent.emit({
                iOS: args.ios,
                android: args.android,
                args
            });
        });

        applicationOn(uncaughtErrorEvent, function (args: UnhandledErrorEventData) {
            this._log.e(`${this.separador} UNCAUGHT_ERROR_EVENT ${this.separador}`);
            this.uncaughtErrorEvent.emit({
                iOS: args.ios,
                android: args.android,
                args,
                error: args.error
            });
        });
    }

    escucharEventosAndroid() {
        if (android) {
            android.on(AndroidApplication.activityCreatedEvent, (args: AndroidActivityBundleEventData) => {
                this._log.i(`${this.separadorAndroid} ACTIVITY_CREATED_EVENT ${this.separadorAndroid}`);
                this.activityCreatedEvent.emit({
                    eventName: args.eventName,
                    args,
                    activity: args.activity,
                    bundle: args.bundle
                });
            });

            android.on(AndroidApplication.activityDestroyedEvent, (args: AndroidActivityEventData) => {
                this._log.i(`${this.separadorAndroid} ACTIVITY_DESTROYED_EVENT ${this.separadorAndroid}`);
                this.activityDestroyedEvent.emit({
                    eventName: args.eventName,
                    args,
                    activity: args.activity,
                });
            });

            android.on(AndroidApplication.activityStartedEvent, (args: AndroidActivityEventData) => {
                this._log.i(`${this.separadorAndroid} ACTIVITY_STARTED_EVENT ${this.separadorAndroid}`);
                this.activityStartedEvent.emit({
                    eventName: args.eventName,
                    args,
                    activity: args.activity,
                });
            });

            android.on(AndroidApplication.activityPausedEvent, (args: AndroidActivityEventData) => {
                this._log.i(`${this.separadorAndroid} ACTIVITY_PAUSED_EVENT ${this.separadorAndroid}`);
                this.activityPausedEvent.emit({
                    eventName: args.eventName,
                    args,
                    activity: args.activity,
                });
            });

            android.on(AndroidApplication.activityResumedEvent, (args: AndroidActivityEventData) => {
                this._log.i(`${this.separadorAndroid} ACTIVITY_RESUME_EVENT ${this.separadorAndroid}`);
                this.activityResumedEvent.emit({
                    eventName: args.eventName,
                    args,
                    activity: args.activity,
                });
            });

            android.on(AndroidApplication.activityStoppedEvent, (args: AndroidActivityEventData) => {

                this._log.i(`${this.separadorAndroid} ACTIVITY_STOPPED_EVENT ${this.separadorAndroid}`);
                this.activityStoppedEvent.emit({
                    eventName: args.eventName,
                    args,
                    activity: args.activity,
                });
            });

            android.on(AndroidApplication.saveActivityStateEvent, (args: AndroidActivityBundleEventData) => {

                this._log.i(`${this.separadorAndroid} SAVE_ACTIVITY_STATE_EVENT ${this.separadorAndroid}`);
                this.saveActivityStateEvent.emit({
                    eventName: args.eventName,
                    args,
                    activity: args.activity,
                    bundle: args.bundle
                });

            });

            android.on(AndroidApplication.activityResultEvent, (args: AndroidActivityResultEventData) => {

                this._log.i(`${this.separadorAndroid} ACTIVITY_RESULT_EVENT ${this.separadorAndroid}`);
                this.activityResultEvent.emit({
                    eventName: args.eventName,
                    args,
                    activity: args.activity,
                    intent: args.intent,
                    requestCode: args.requestCode,
                    resultCode: args.resultCode,
                });

            });

            android.on(AndroidApplication.activityBackPressedEvent, (args: AndroidActivityBackPressedEventData) => {

                this._log.i(`${this.separadorAndroid} ACTIVITY_BACK_PRESSED_EVENT ${this.separadorAndroid}`);
                this.activityBackPressedEvent.emit({
                    eventName: args.eventName,
                    args,
                    activity: args.activity,
                });

            });
        }
    }


}




