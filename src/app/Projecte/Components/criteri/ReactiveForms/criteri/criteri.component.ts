import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {
  criteriForm!: FormGroup;
  @ViewChild('contenidorRubrica') table: ElementRef;

  constructor(private fb: FormBuilder, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.criteriForm = this.fb.group({
      nomCriteri: ['',
        {
          validators: [
            Validators.required,
            Validators.minLength(7),
          ]
        }],
    });
  }
  
  afegirCriteri() {
    const fila: HTMLTableRowElement = this.renderer.createElement('tr');
    const casella1: HTMLTableCellElement = this.renderer.createElement('td');
    const casella2: HTMLTableCellElement = this.renderer.createElement('td');

    const br: HTMLBRElement = this.renderer.createElement('br'); 

    const labelC: HTMLLabelElement = this.renderer.createElement('label');
    labelC.innerHTML = "Nom criteri: ";
    
    const input: HTMLInputElement = this.renderer.createElement('input');
    input.placeholder = "Escriu el nom del criteri";
    input.type = "text";
    
    const botoCriteri: HTMLButtonElement = this.renderer.createElement('button');
    botoCriteri.innerHTML = "+";
    botoCriteri.addEventListener("click", this.afegirCriteri);

    const botoValoracio: HTMLButtonElement = this.renderer.createElement('button');
    botoValoracio.innerHTML = "Afegir Valoracio";
    botoValoracio.addEventListener("click", () => this.afegirValoracio(fila));


    labelC.appendChild(input);
    casella1.appendChild(labelC);
    casella1.appendChild(br);
    casella1.appendChild(botoCriteri);
    casella2.appendChild(botoValoracio);

    fila.appendChild(casella1);
    fila.appendChild(casella2);

    if(!this.criteriForm.valid) {
      botoCriteri.disabled = true;
    } else {
      botoCriteri.disabled = false;
    }
    this.renderer.appendChild(this.table.nativeElement, fila);

  }

  afegirValoracio(fila: HTMLTableRowElement) {
    const div: HTMLDivElement = this.renderer.createElement('div');

    const casella: HTMLTableCellElement = this.renderer.createElement('td');

    const br: HTMLBRElement = this.renderer.createElement('br'); 

    const labelNom: HTMLLabelElement = this.renderer.createElement('label');
    labelNom.innerHTML = "Nom Valoració: "

    const input: HTMLInputElement = this.renderer.createElement('input');
    input.placeholder = "Afegeix una nota";
    input.type = "number";
    
    const labelRadio: HTMLLabelElement = this.renderer.createElement('label');
    labelRadio.innerHTML = "Marcar Valoracio: "
    const inputRadio: HTMLInputElement = this.renderer.createElement('input');
    inputRadio.type = "radio";

    const botoValoracio: HTMLButtonElement = this.renderer.createElement('button');
    botoValoracio.innerHTML = "+";
    botoValoracio.onclick;

    labelNom.appendChild(input);
    casella.appendChild(labelNom);

    casella.appendChild(br);

    labelRadio.appendChild(inputRadio);
    casella.appendChild(labelRadio);

    //div.appendChild(botoValoracio);
    fila.appendChild(casella)
    //this.renderer.appendChild(this.table.nativeElement, fila);
  }

  getControlNomCriteri():any {
    return this.criteriForm.get("nomCriteri")?.value;
  }
  onSubmit() {
    console.log(this.criteriForm.get("nomCriteri")?.value);
  }
}
