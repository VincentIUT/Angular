import { Component } from '@angular/core';
import { Bug } from './@shared/models/bug';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BugTracker';

  bugs = [];

  addBug(newBug: Partial<Bug>) {
    this.bugs.push(newBug);
  }
}
