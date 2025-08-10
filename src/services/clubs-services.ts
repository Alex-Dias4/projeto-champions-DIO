import * as clubsRepositories from "../repositories/clubs-repository";
import * as HttpResponse from "../utils/http-helper";

export const getClubsService = async () => {
    const data = await clubsRepositories.findAllClubs();
    const Response = await HttpResponse.ok(data)

    return Response;
}