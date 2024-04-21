import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-angular-element',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './test-angular-element.component.html',
  styleUrl: './test-angular-element.component.scss'
})
export class TestAngularElementComponent { }
