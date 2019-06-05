import {Component, NgModule} from '@angular/core';
import { IndicesComponent } from './indices/indices.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations: [
    IndicesComponent
  ]
})
export class AppComponent {
  title = 'ihmelastic';
}
