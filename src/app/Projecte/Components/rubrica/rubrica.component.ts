import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Rubrica } from '../../Model/Entities/Implementations/Rubrica';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {

  rubrica: Rubrica = new Rubrica();
  @ViewChild('contenidorRubrica') div: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  public getLongitud() { return this.rubrica.getLongitudCriteris(); }


  afegirCriteri() {
    const div: HTMLDivElement = this.renderer.createElement('div');
    const hr: HTMLHRElement = this.renderer.createElement('hr');
    const br: HTMLBRElement = this.renderer.createElement('br'); 

    const labelC: HTMLLabelElement = this.renderer.createElement('label');
    labelC.innerHTML = "Criteri: ";
    
    const input: HTMLInputElement = this.renderer.createElement('input');
    input.placeholder = "Afegeix una nota";
    input.type = "number";
    
    const labelV: HTMLLabelElement = this.renderer.createElement('label');
    labelV.innerHTML = "Valoració: "

    const botoValoracio: HTMLButtonElement = this.renderer.createElement('button');
    botoValoracio.innerHTML = "+";
    botoValoracio.onclick;

    labelC.appendChild(input);
    div.appendChild(hr);
    div.appendChild(labelC);
    div.appendChild(br);
    div.appendChild(botoValoracio);

    this.renderer.appendChild(this.div.nativeElement, div);
    
  }

  escriuJSON() {
    const myObj = { name: "John", age: 31, city: "New York" };
    const myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);
    
  }

  llegeixJSON() {

  }

  getRubrica() {
    return this.rubrica;
  }
}
