import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Bill } from '../models/bill.model';
import { Item } from '../models/item.model';
import { BillHttpService } from '../services/bill-htpp.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-bill-new',
  templateUrl: './bill-new.component.html',
  styleUrls: ['./bill-new.component.css']
})
export class BillNewComponent implements OnInit {
  billForm: FormGroup;
  items: FormArray;
  error=undefined;
  billGenerated=false;
  bill=undefined;
  
  constructor(private billHttpService: BillHttpService) { }

  ngOnInit() {
    this.billGenerated=false;
    this.bill=undefined;

    this.items = new FormArray([]);

    this.billForm = new FormGroup({
      billDate: new FormControl(new Date()),
      customerName: new FormControl(),
      contact: new FormControl(),
      items: this.items
    });
    this.addItem();
  }

  addItem() {
    this.items.push(new FormGroup({
      name: new FormControl(),
      price: new FormControl(0),
      qty: new FormControl(0),
      amount: new FormControl(0)
    }));
  }

  getBillAmount() {
    let t = 0;
    this.items.controls.forEach(item => {
      t += item.get('amount').value;
    });
    return t;
  }

  calcAmt(item: FormGroup) {
    item.get('amount').setValue(item.get('price').value * item.get('qty').value);
  }

  onSubmit() {
    console.log(this.billForm.value);
    
    let bill: Bill = new Bill(0, this.dateToString(this.billForm.get('billDate').value), this.billForm.get('customerName').value, this.billForm.get('contact').value)
    this.items.controls.forEach((item, index) => {
      const i = new Item(index + 1, item.get("name").value, item.get('price').value, item.get('qty').value);
      bill.addItem(i);
    });

    console.log(JSON.stringify(bill));
    console.log(bill.getBillAmount());

    this.billHttpService.saveBill(bill).subscribe(response => {
      if(response.status=='SUCCESS'){
        const billNo=response.message.billno;
        bill.billno=billNo;
        this.billGenerated=true;
        this.bill=bill;
      }else{
        this.error=response.message;
      }
    })


    this.billGenerated=true;
    this.bill=bill;
  }

  dateToString(date: Date) {
    return formatDate(date, 'yyyy-MM-dd HH:mm:ss', 'en-US');
  }
}
