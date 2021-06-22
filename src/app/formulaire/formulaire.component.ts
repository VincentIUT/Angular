import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Bug } from '../@shared/models/bug';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { BugService } from '../@shared/services/bug.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent implements OnInit {

  // @Output() newBugEvent = new EventEmitter<Partial<Bug>>();
  addBugForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public bugService: BugService
    ) { 
    this.createForms();
  }

  ngOnInit(): void {
  }

  create() {
    console.log("create > ", this.addBugForm);
	  // const title = this.addBugForm.get("title").value;
	  // const description = this.addBugForm.get("description").value;
    // this.addNewBug({title: title, description: description});
    this.bugService.create(this.addBugForm.value).subscribe(res=>{
      alert("Bug enregistré");
    })
  }

  private createForms(){
    this.addBugForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['']
    });
  }
  // addNewBug(value: Partial<Bug>){
  //   this.newBugEvent.emit(value);
  // }
}
