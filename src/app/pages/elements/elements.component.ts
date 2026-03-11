import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html'
})
export class ElementsComponent {
  demoForm: FormGroup;
  currentPage = 1;
  totalPages = [1, 2, 3, 8];

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      name: [''],
      email: [''],
      category: [''],
      priority: ['low'],
      copy: [false],
      human: [true],
      message: ['']
    });
  }

  onSubmit(): void {
    console.log('Demo form submitted:', this.demoForm.value);
    this.demoForm.reset({ priority: 'low', human: true });
  }

  onReset(): void {
    this.demoForm.reset({ priority: 'low', human: true });
  }

  setPage(page: number): void {
    this.currentPage = page;
  }
}
