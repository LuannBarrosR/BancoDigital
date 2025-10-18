import { PeopleAccount } from "./src/models/PeopleAccount"
import { EnterpriseAccount } from "./src/models/EnterpriseAccount"






const peopleAccount: PeopleAccount = new PeopleAccount(572596807, 'Luan', 2233)
console.log(peopleAccount)

const enterpriseAccount: EnterpriseAccount = new EnterpriseAccount('RD7Patrimonial', 6633)
console.log(enterpriseAccount)