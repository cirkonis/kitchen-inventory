import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categories, Item } from '@inventory/api-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { evaluateStatus } from '../../helpers/helpers';

@Component({
  selector: 'inventory-full-item-form',
  templateUrl: './full-item-form.component.html',
  styleUrls: ['./full-item-form.component.css'],
})
export class FullItemFormComponent implements OnInit {
  @Input() item!: Item;

  @Input() mode!: string;

  // @ts-ignore
  @Output() itemPayload: EventEmitter<Partial<Item>> = new EventEmitter();

  itemForm!: FormGroup;

  categories: string[] = [
    Categories.DRINK,
    Categories.SNACK,
    Categories.UTILITIY,
  ];

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      stock: [null, [Validators.required, Validators.min(0)]],
      unit: [null, [Validators.required]],
      threshold: [null, [Validators.required, Validators.min(0)]],
      orderAmount: [null, [Validators.required, Validators.min(0)]],
      category: [null, [Validators.required]],
    });
  }
  onSubmit() {
    if (this.itemForm.valid) {
      const itemFormValue = this.itemForm.value;
      this.itemPayload.emit({
        name: itemFormValue.name,
        stock: itemFormValue.stock,
        unit: itemFormValue.unit,
        threshold: itemFormValue.threshold,
        orderAmount: itemFormValue.orderAmount,
        category: itemFormValue.category,
        status: evaluateStatus(itemFormValue.stock, itemFormValue.threshold),
      });
    } else {
      return;
    }
  }
}
