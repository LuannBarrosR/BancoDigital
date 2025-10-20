import { PeopleAccount } from "./src/models/PeopleAccount"
import { EnterpriseAccount } from "./src/models/EnterpriseAccount"
import { EspecialAccount } from "./src/models/EspecialAccount"




//Instancias para a classe 'PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(572596807, 'Luan', 2233)
console.log(peopleAccount)
console.log("------------\n------------\n------------\n")
console.log("Saldo antes do depósito: ", peopleAccount.getSaldo())
peopleAccount.deposit(800.00)
console.log("Saldo depois do depósito: ", peopleAccount.getSaldo())
peopleAccount.deposit(12.33)
console.log("------------\n------------\n------------\n")
peopleAccount.withdraw(123.45)
peopleAccount.withdraw(700)

//Instancias para a classe 'EnterpriseAccount'

const enterpriseAccount: EnterpriseAccount = new EnterpriseAccount('RD7Patrimonial', 6633)
console.log(enterpriseAccount)
console.log("------------\n------------\n------------\n")
enterpriseAccount.deposit(10000)
console.log("------------\n------------\n------------\n")
enterpriseAccount.getLoan(321654.98)
enterpriseAccount.withdraw(1123500)

//Instancias para a classe 'EspecialAccount'

const especialAccount = new EspecialAccount('Especial', 123456)
console.log(especialAccount)
console.log("------------\n------------\n------------\n")
especialAccount.getSaldo()
console.log("------------\n------------\n------------\n")
especialAccount.deposit(100)
especialAccount.deposit(200)

