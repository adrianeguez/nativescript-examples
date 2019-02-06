import {Connection, EntitySubscriberInterface, InsertEvent, RemoveEvent, UpdateEvent} from "typeorm";
import {EmpresaEntity} from "./empresa.entity";
import {Injectable} from "@nestjs/common";
import {InjectConnection} from "@nestjs/typeorm";
import {EmpresaService} from "./empresa.service";
import {EventEmitter} from "events";
import {fromEvent} from "rxjs";


@Injectable()
export class EmpresaSubscriber implements EntitySubscriberInterface<EmpresaEntity> {

    beforeInsertEvent = new EventEmitter();
    beforeInsertEvent$ = fromEvent(this.beforeInsertEvent, 'data');

    constructor(
        @InjectConnection() readonly connection: Connection,
        private readonly _empresaService: EmpresaService,
    ) {
        connection.subscribers.push(this)

    }

    listenTo() {
        return EmpresaEntity;
    }

    async beforeInsert(event: InsertEvent<EmpresaEntity>) {

        this.beforeInsertEvent$.subscribe(
            (a) => {
                console.log('a', a)
            }
        );

        this.beforeInsertEvent.emit('data', {
            datos: 'datos'
        });

        console.log(await this._empresaService.find());

        console.log(`BEFORE POST INSERTED: `, event.entity);
    }

    /**
     * Called before entity insertion.
     */
    beforeUpdate(event: UpdateEvent<any>) {
        console.log(`BEFORE ENTITY UPDATED: `, event.entity);
    }

    /**
     * Called before entity insertion.
     */
    beforeRemove(event: RemoveEvent<any>) {
        console.log(`BEFORE ENTITY WITH ID ${event.entityId} REMOVED: `, event.entity);
    }

    /**
     * Called after entity insertion.
     */
    afterInsert(event: InsertEvent<any>) {
        console.log(`AFTER ENTITY INSERTED: `, event.entity);
    }

    /**
     * Called after entity insertion.
     */
    afterUpdate(event: UpdateEvent<any>) {
        console.log(`AFTER ENTITY UPDATED: `, event.entity);
    }

    /**
     * Called after entity insertion.
     */
    afterRemove(event: RemoveEvent<any>) {
        console.log(`AFTER ENTITY WITH ID ${event.entityId} REMOVED: `, event.entity);
    }

    /**
     * Called after entity is loaded.
     */
    afterLoad(entity: any) {
        console.log(`AFTER ENTITY LOADED: `, entity);
    }

}