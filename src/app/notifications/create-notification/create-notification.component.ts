import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Notification} from '../../models/notification';
import {NotificationType} from '../../models/notification-type';

@Component({
    selector: 'app-create-notification',
    templateUrl: './create-notification.component.html',
    styleUrls: ['./create-notification.component.css']
})
export class CreateNotificationComponent {
    myForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<CreateNotificationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder
    ) {
        this.myForm = this.fb.group({
            text: ['', Validators.required],
            startDate: ['', Validators.required],
            dueDate: ['', Validators.required],
        });
    }

    onSubmit() {
        let notification: Notification = {
            description: this.myForm.get('text')!.value,
            isActive: true,
            creationDate: this.myForm.get('startDate')!.value,
            due: this.myForm.get('dueDate')!.value
        }
        if (this.myForm.valid) {
            this.dialogRef.close(notification);
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
