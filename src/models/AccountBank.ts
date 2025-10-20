
export abstract class AccountBank{
    private readonly name: string
    private readonly accountNumber: number
    private saldo: number = 0
    private status: boolean = true


    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name 
    }

    deposit = (value_deposit: number): void => {
        if (this.validate_status()){

            this.saldo = this.saldo + value_deposit

            console.log("Você depositou: R$", value_deposit, "\n Você possui agora um saldo dê: R$", this.saldo)
        }
    }

    withdraw = (value_withdraw: number): void => {
        if (this.validate_status() && value_withdraw < this.saldo){
            this.saldo = this.saldo - value_withdraw
            console.log("Você sacou o valor dê: ", value_withdraw, "\n O seu saldo atual é dê: ", this.saldo)
        }
        else{
            console.log("Conta não autorizada ou Saldo não suficiente!")
        }
    }   

    getSaldo = (): number => {
        console.log("Este é o seu saldo bancário", this.saldo)
        return this.saldo
    }
    setSaldo = (value_saldo: number): void => {
        this.saldo = value_saldo
    }

    private validate_status = (): boolean =>{
        if (this.status){
            return this.status
        }
        throw new Error("Conta inválida")
    }

    getIsValid(): boolean {
        return this.validate_status();
  }
}