import { AccountBank } from '../models/AccountBank'


export class EnterpriseAccount extends AccountBank{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)  
    }

    getLoan = () => {
        console.log("Você pegou um empréstimo!")
    }

    deposit = (): void => {
        console.log("A empresa depositou!")
    }

}