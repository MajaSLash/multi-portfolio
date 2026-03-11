import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() isHomePage = false;
  @Output() menuToggled = new EventEmitter<void>();

  onMenuToggle(): void {
    this.menuToggled.emit();
  }
}
