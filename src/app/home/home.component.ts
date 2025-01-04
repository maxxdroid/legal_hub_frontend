import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
// import { SidesComponent } from '../layout/sides/sides.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { DocsListComponent } from './layout/docs-list/docs-list.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,  FooterComponent, WelcomeComponent, DocsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
