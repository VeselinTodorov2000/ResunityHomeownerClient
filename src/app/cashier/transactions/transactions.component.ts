import {Component, OnInit} from '@angular/core';
import {Transaction} from '../../models/transaction';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
    displayedColumns: string[] = ['amount', 'receiverIban', 'reason', 'date']; // Declare and initialize displayedColumns
    dataSource!: MatTableDataSource<Transaction>;
    transactions!: Transaction[];

    filteredTransactions!: Transaction[];
    startDate!: Date;
    endDate!: Date;

    constructor(public dialog: MatDialog, private route: ActivatedRoute) {
        this.dataSource = new MatTableDataSource(this.transactions);
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const itemString = params['selection'];
            this.transactions = JSON.parse(itemString);
        });
        this.filteredTransactions = this.transactions;
        this.startDate = new Date();
        this.endDate = new Date();
    }

    applyDateFilter() {
        if (this.startDate && this.endDate) {
            this.filteredTransactions = this.transactions.filter(transaction =>
                transaction.date >= this.startDate && transaction.date <= this.endDate
            );
        } else {
            this.filteredTransactions = this.transactions;
        }
    }

    exportToExcel() {
        console.log('Exporting to Excel...');
    }

    getAmountColor(amount: number): string {
        return amount >= 0 ? 'green' : 'red';
    }

}
