import { AccountBank } from '../models/AccountBank'


export class EnterpriseAccount extends AccountBank{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)  
    }

    getLoan = (value_loan: number): void => {
        if (this.getIsValid()){
            this.setSaldo(this.getSaldo() + value_loan)
            console.log("Você pegou um empréstimo dê: ", value_loan, "\nFicou com um saldo dê: ", this.getSaldo(), "\nSerá cobrado 10 centavos de juros a cada dia até ser devolvido!")
        }
        
    }

    deposit = (value_deposit: number): void => {
        if (this.getIsValid()){

            this.setSaldo(this.getSaldo() + value_deposit)
            console.log(this.getName(), " depositou: R$", value_deposit, "\n", this.getName() ," possui agora um saldo dê: R$", this.getSaldo())
        }
    }

}