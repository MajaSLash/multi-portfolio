import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}
