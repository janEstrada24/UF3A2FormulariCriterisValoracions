import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Rubrica } from '../../Model/Entities/Implementations/Rubrica';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {

  rubrica: Rubrica = new Rubrica();

  rubricaForm: FormGroup;

  constructor(private fb: FormBuilder, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.initRubrica();
  }

  initRubrica() {
    this.rubricaForm = this.fb.group({
      criteris: this.fb.array([this.newCriteri]),
    })
  }

  get newCriteri(): FormGroup {
    return this.fb.group({
      nom: new FormControl('', Validators.required),
      valoracions: this.fb.array([this.newValoracio])
    })
  }

  get newValoracio(): FormGroup {
    return this.fb.group({
      nom: new FormControl(''),
      nota: new FormControl(0),
    })
  }

  get criteris(): FormArray {
    return this.rubricaForm.get("criteris") as FormArray;
  }

  get valoracions(): FormArray {
    return this.rubricaForm.get("valoracions") as FormArray;
  }

  addCriteri() {
    this.criteris.push(
        this.fb.group({
          nom: new FormControl('', Validators.required),
          valoracions: this.fb.array([this.newValoracio])
        })
      )
  }

  addValoracio() {
    this.valoracions.push(
      this.fb.group({
        nom: [''],
        nota: [0],
      })
    )
  }

  removeCriteri(index: number) {
    const control = <FormArray>this.criteris;
    control.removeAt(index);
  }

  removeValoracio(index: number) {
    const control = <FormArray>this.valoracions;
    control.removeAt(index);
  }
}
