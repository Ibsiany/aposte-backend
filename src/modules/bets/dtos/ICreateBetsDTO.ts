import { Play } from "@modules/play/infra/typeorm/entities/Play";
import { User } from "@modules/users/infra/typeorm/entities/User";

export interface ICreateBetsDTO {
    type?: string;
    value: string;
    id_play: string;
    play?: Play;
    id_user: string;
    user?: User;
}