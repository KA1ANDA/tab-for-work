import { Component, OnInit, ViewChild } from '@angular/core';
import { TabView } from 'primeng/tabview';

@Component({
  selector: 'app-new-tab',
  templateUrl: './new-tab.component.html',
  styleUrl: './new-tab.component.scss'
})
export class NewTabComponent {
  activeIndex: number = 1; 

  onPrevClick(event: Event) {
    event.stopPropagation(); 
    if (this.activeIndex > 1) {
      this.activeIndex--;
    }
  }

  onNextClick(event: Event) {
    event.stopPropagation(); 
    if (this.activeIndex < 3) { 
      this.activeIndex++;
    }
  }
}
