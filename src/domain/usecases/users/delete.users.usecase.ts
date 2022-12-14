import usersRepository from "../../../adapters/repositories/users.repository";
import IUsersRepository from "../../repositories/users.interface.repository";
import { IUseCase } from "../usecase.interface";

export class DeleteUsersUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: { iduser: number }): Promise<void> {
        return await this._repository.delete(data.iduser)
    }
}

export default new DeleteUsersUseCase(usersRepository);