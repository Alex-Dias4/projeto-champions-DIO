import { response } from "express";
import { PlayerModel } from "../models/player-model";
import { StaticsModel } from "../models/statics-model";
import * as playerRepository from "../repositories/player-repository";
import * as HttpResponse from "../utils/http-helper";
import { isValidPlayer, isValidStatics } from "../utils/validação-player";



export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers()
    let response = null

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent()
    }
    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await playerRepository.findPlayersById(id);
    let response = null

    if (data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }
    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null

    // if(Object.key(player).length !== 0) outra forma que compara se player não é um objeto vazio, caso não funciona =>
    if (isValidPlayer(player)) {
        const insert = await playerRepository.insertPlayer(player);

        if (insert) {
            response = await HttpResponse.created(player)
        } else {
            response = await HttpResponse.conflict("ID ja existente")
        }

    } else {
        response = await HttpResponse.badRequest("resquest null or aguments erro")
    }
    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null
    const del = await playerRepository.deleteOnePlayer(id)

    if (del) {
        response = await HttpResponse.ok("deletado com sucesso")
    } else {
        response = await HttpResponse.badRequest("Not Found, delete impossible")
    }

    return response
}

export const updatePlayerService = async (id: number, statics:StaticsModel) => {
    let response = null
    if (isValidStatics(statics)) {
        const update = await playerRepository.findAndModifyPlayer(id, statics);

        if (!update) {
            return response = await HttpResponse.notFound()
        } else {
            return response = await HttpResponse.ok(update)
        }
    }else{
        return response = await HttpResponse.badRequest("formato do statics invalido")
    }
}