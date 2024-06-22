import {Transaction} from './transaction';

export interface Safe {
    debit: number;
    cashierName: string;
    iban: string;
    monthlyTax: number;
    transactions: Transaction[];
}
