import { AccountBank } from '../models/AccountBank'


export class PeopleAccount extends AccountBank{
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }
    
}