import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = new FormControl('');
  firstName = new FormControl('');
  description = new FormControl('');
  submit() {
    console.log(this.name.value);
    console.log(this.firstName.value);
}

}
