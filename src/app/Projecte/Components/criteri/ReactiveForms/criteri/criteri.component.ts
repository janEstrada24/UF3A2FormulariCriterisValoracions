import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {
  criteriForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criteriForm = this.fb.group({
      codi: ['2022-',
        {
          validators: [
            Validators.required,
            Validators.minLength(7),
          ]
        }],
      titol: ["", [
        Validators.required,
        Validators.maxLength(100),
      ]],
      responsable: this.fb.group({
        rol: ["",
          Validators.required,
        ],
        nom: [""],
      })
    });
  }
  onSubmit() {
    console.log(this.criteriForm.get("codi")?.value);
    console.log(this.criteriForm.get("titol")?.value);
  }
}
