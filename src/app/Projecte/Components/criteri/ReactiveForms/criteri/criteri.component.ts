import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Criteri } from 'src/app/Projecte/Model/Entities/Implementations/Criteri';

@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {
  //criteriForm!: FormGroup;
  valoracioForm!: FormGroup;
  @ViewChild('contenidorRubrica') table: ElementRef;

  constructor(private fb: FormBuilder, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }
  
  criteriForm = this.fb.group({
    nomCriteri: ['',
      {
        validators: [
          Validators.required,
          Validators.minLength(7),
        ]
      }],
    
    valoracions: this.fb.array([
      
    ]),
  });

  get newInfo(): FormGroup {
    return this.fb.group({
      nom: [''],
      nota: ['0'],
    })
  }

  get infos(): FormArray {
    return this.criteriForm.get('valoracions') as FormArray;
  }

  afegirCriteri() {
    
    let criteri: Criteri = new Criteri("");

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

    if(input.innerHTML == "") {
      input.addEventListener("change", ()=> localStorage.setItem("", "inputCriteri"));
      botoCriteri.disabled = true;
    } else if (input.innerHTML != "") {
      input.addEventListener("change", ()=> localStorage.setItem(input.innerHTML, "inputCriteri"));
    } 
    else {
      botoCriteri.disabled = false;
    }

/*    let prova = localStorage.getItem("inputCriteri");
    input.addEventListener("change", () => this.mostrar(prova));*/
    
    this.renderer.appendChild(this.table.nativeElement, fila);

  }
  
  mostrar(contingut: String) {
    console.log(contingut);
  }

  afegirValoracio(fila: HTMLTableRowElement) {
    const div: HTMLDivElement = this.renderer.createElement('div');

    const casella: HTMLTableCellElement = this.renderer.createElement('td');

    const br: HTMLBRElement = this.renderer.createElement('br'); 

    const labelNom: HTMLLabelElement = this.renderer.createElement('label');
    labelNom.innerHTML = "Nom Valoració: "

    const input: HTMLInputElement = this.renderer.createElement('input');
    input.placeholder = "Afegeix una nota";
    input.type = "text";
    
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
    fila.appendChild(casella);
    //this.renderer.appendChild(this.table.nativeElement, fila);
  }

  getControlNomCriteri():any {
    return this.criteriForm.get("nomCriteri")?.value;
  }
  onSubmit() {
    console.log(this.criteriForm.get("nomCriteri")?.value);
  }
}
