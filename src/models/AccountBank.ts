
export abstract class AccountBank{
    private name: string
    accountNumber: number
    saldo: number = 0
    status: boolean = true


    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void =>{
        this.name = name
        console.log("Nome alterado com sucesso! \n-->:", this.name)
    }
    getName = (): string => {
        return this.name 
    }

    deposit = (): void => {
        if (this.validate_status()){
            console.log("Você depositou!")
        }
    }

    withdraw = (): void => {
        console.log("Você sacou!")
    }

    getSaldo = (): void => {
        console.log("Este é o seu saldo bancário", this.saldo)
    }

    private validate_status = (): boolean =>{
        if (this.status){
            return this.status
        }
        throw new Error("Conta inválida")
    }
}