import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-debug-form',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './debug-form.component.html',
})
export class DebugFormComponent {
  @Input() form!: FormGroup;
}
