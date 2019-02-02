import { Resolver, Query, Args, Context, Info, Parent, Root, Mutation } from '@nestjs/graphql';
import { PrincipalResolver } from '@manticore-labs/nest';
import { SucursalService } from './sucursal.service';
import { SucursalCreateDto } from './sucursal-create-dto/sucursal-create-dto';
import { SucursalUpdateDto } from './sucursal-update-dto/sucursal-update-dto';
import { politicasSucursal } from './sucursal-politicas/sucursal.politicas';
import { mensajesSucursal } from './sucursal-mensajes/sucursal.mensajes';
import {Observable} from 'rxjs';

@Resolver('Sucursal')
export class SucursalResolver extends PrincipalResolver {
    constructor(private readonly _sucursalService: SucursalService) {
        super(politicasSucursal, // politicas de seguridad
            _sucursalService,
            { // Dtos
                CreateDto: SucursalCreateDto,
                UpdateDto: SucursalUpdateDto
            },
            0, // skip
            30, // take
            mensajesSucursal,
            undefined // contexto
        );
        this.contexto = this;
    }

    @Query('findAllSucursal')
    findAllSucursal(
        @Args('criterioBusqueda') criterioBusqueda: string,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.devolverRespuesta('findAll', criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findWhereOrSucursal')
    findWhereOrSucursal(
            @Args('criterioBusqueda') criterioBusqueda: string,
            @Args() args,
            @Context() context,
            @Info() info,
            @Parent() parent,
            @Root() root,
    ) {
        return this.devolverRespuesta('findWhereOr', criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findOneSucursalById')
    findOneSucursalById(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.findOneById(id, args, context, info, parent, root);
    }

    @Mutation('createOneSucursal')
    createOneSucursal(
        @Args('nuevoRegistro') nuevoRegistro,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.createOne(nuevoRegistro, args, context, info, parent, root);
    }

    @Mutation('deleteOneSucursal')
    deleteOneSucursal(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.deleteOne(id, args, context, info, parent, root);
    }

    @Mutation('updateOneSucursal')
    updateOneSucursal(
        @Args('id') id,
        @Args('registroAActualizar') registroAActualizar,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.updateOne(id, registroAActualizar, args, context, info, parent, root);
    }

    devolverRespuesta(tipo, criterioBusqueda, args, context, info, parent, root) {
        return new Promise((resolve, reject) => {
            let servicio;
            if (tipo === 'findAll') {
                servicio = this.findAll(criterioBusqueda, args, context, info, parent, root);
            } else {
                servicio = this.findWhereOr(criterioBusqueda, args, context, info, parent, root);
            }
            servicio
                .then(
                    (r: Observable<[[any], 0]>) => {
                        r.subscribe(
                            (c) => {
                                resolve({registros: c[0], numero: c[1]});
                            }
                        );

                    }
                )
                .catch(
                    (e) => {
                        console.error('Error', e);
                        resolve({registros: [], numero: 0});
                    }
                );
        });
    }

}