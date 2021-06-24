import { Component, Input, OnInit } from '@angular/core';
import { Bug } from '../@shared/models/bug';
import { BugService } from '../@shared/services/bug.service';

@Component({
  selector: 'app-showbug',
  templateUrl: './showbug.component.html',
  styleUrls: ['./showbug.component.scss']
})
export class ShowbugComponent implements OnInit {

  message = '';

   @Input() bug : Bug;
   bugs = [];

  constructor(
    public bugService: BugService
  ) { }

  ngOnInit() { 
    this.bugService.getAll().subscribe((data: Bug[])=>{
      console.log(data);
      this.bugs = data;
    })
  }

  remove(id) {
    this.bugService.delete(id).subscribe(()=>{
      this.bugs = this.bugs.filter(b => b._id!=id)
    });    
  }

}
