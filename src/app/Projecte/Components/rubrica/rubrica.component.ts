import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Rubrica } from '../../Model/Entities/Implementations/Rubrica';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {

  rubrica: Rubrica = new Rubrica();
  @ViewChild('contenidor') div: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const jsonRubrica: string = "../../Model/Entities/Implementations/Rubrica.json";
    const config = require(jsonRubrica);
  }

  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      console.log(this.div.nativeElement.innerText);
    }, 1000);
  }

  public getLongitud() { return this.rubrica.getLongitudCriteris(); }


  afegirCriteri() {
    var contenidorCriteri = document.getElementsByClassName("contenidor");
    let botoCriteri = document.getElementsByClassName("botoCriteri");
    //------------------------------------------------------------------
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "add new";
    contenidorCriteri;
    this.renderer.appendChild(this.div.nativeElement, p);
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
