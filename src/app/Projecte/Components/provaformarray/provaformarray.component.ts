import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-provaformarray',
  templateUrl: './provaformarray.component.html',
  styleUrls: ['./provaformarray.component.css']
})
export class ProvaformarrayComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  formNewProduct = this.formBuilder.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    infoProduct: this.formBuilder.array([this.newInfo])
  })

  get newInfo(): FormGroup {
    return this.formBuilder.group({
      size: this.formBuilder.array([this.newSize]),
      description: [''],
      color: [''],
      price: [''],
      image: [''],
    })
  }

  get infos(): FormArray {
    return this.formNewProduct.get('infoProduct') as FormArray;
  }

  addInfos() {
    this.infos.push(this.newInfo);
  }

  removeInfos(i: number) {
    this.infos.controls.splice(i, 1);
    this.infos.updateValueAndValidity();
  }

  get newSize(): FormGroup {
    return this.formBuilder.group({
      size: [''],
      color: [''],
      stock: [''],
    })
  }

  get sizes(): FormArray {
    return this.newInfo.get('size') as FormArray;
  }

  addSizes() {
    this.sizes.push(this.newSize);
  }

  removeSizes(i: number) {
    this.sizes.controls.splice(i, 1);
    this.sizes.updateValueAndValidity();
  }
}
