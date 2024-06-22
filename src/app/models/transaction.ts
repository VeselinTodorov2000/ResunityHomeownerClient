export interface Transaction {
    receiverIban: string;
    amount: number;
    date: Date;
    reason: string;
}
