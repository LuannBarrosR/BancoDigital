import { AccountBank } from '../models/AccountBank'


export class EnterpriseAccount extends AccountBank{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)  
    }

    getLoan = (): void => {
        console.log("Você pegou um empréstimo!")
    }

    deposit = (): number => {
        return 2
    }

}