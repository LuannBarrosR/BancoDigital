import { AccountBank } from './AccountBank'

export class EspecialAccount extends AccountBank{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }


    deposit = (value_deposit: number): void => {
        if (this.getIsValid()){

            this.setSaldo(this.getSaldo() + value_deposit + 10)
            console.log(this.getName(), " depositou: R$", value_deposit, "\n")
            console.log(this.getName(), "E ganhou um bônus de R$ 10,00\n")
            console.log(this.getName() ,"Agora possui um saldo dê: R$", this.getSaldo())
        }
    }

}