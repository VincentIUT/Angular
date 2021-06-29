import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BugService } from '../@shared/services/bug.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  UpdateForm : FormGroup;
  message = '';

  constructor(private formBuilder: FormBuilder, public bugService: BugService, private route: ActivatedRoute, private router: Router) {
    this.createForms();
   }

  ngOnInit(): void {
  }

  edit() {
    const id= this.route.snapshot.paramMap.get('id');
    this.bugService.update(id, this.UpdateForm.value).subscribe(
      res => {
        console.log("toto");
        this.message = 'le bug a bien été mis à jour !';
        this.router.navigate(['/showbug']);
      });
  }

  private createForms(){
    this.UpdateForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['']
    });
  }
}
