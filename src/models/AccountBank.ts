
export abstract class AccountBank{
    name: string
    accountNumber: number
    saldo: number = 20


    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (): void => {
        console.log("Você depositou!")
    }

    withdraw = (): void => {
        console.log("Você sacou!")
    }

    getSaldo = (): void => {
        console.log("Este é o seu saldo bancário", this.saldo)
    }
}