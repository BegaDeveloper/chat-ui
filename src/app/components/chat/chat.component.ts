import { Component, ElementRef, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from './snackbar.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  message: string = '';
  activeButton: string = 'internal';
  placeholderText: string = 'Query internal files...';
  @ViewChild('autosize') autosize: ElementRef;
  showInternalKnowledgeMenu: boolean = false;
  internalKnowledgeClickedOnce: boolean = false;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  sendMessage() {
    console.log('Sending message:', this.message);
  }

  isActiveButton(button: string): boolean {
    return this.activeButton == button;
  }

  setActiveButton(button: string): void {
    if (button === 'internal') {
      if (!this.internalKnowledgeClickedOnce) {
        this.internalKnowledgeClickedOnce = true;
        this.trigger.closeMenu();
      } else {
        this.trigger.openMenu();
      }
    } else {
      this.internalKnowledgeClickedOnce = false;
    }

    this.activeButton = button;
    switch (button) {
      case 'internal':
        this.placeholderText = 'Query internal files...';
        this.openCustomSnackbar(
          'Switching to Internal Knowledge',
          'import_contacts_outline'
        );
        break;
      case 'web':
        this.placeholderText = 'Query the web...';

        this.openCustomSnackbar(
          'Switching to Web Researcher',
          'language_outline'
        );
        break;
      case 'turbo':
        this.placeholderText = 'Chat-GPT...';
        this.openCustomSnackbar('Switching to Chat-GBT 4', 'star_outline');
        break;
    }
  }

  getSendButtonStyle() {
    return {
      opacity: this.message ? '1' : '0.5',
    };
  }

  getButtonStyle(button: string) {
    if (this.isActiveButton(button)) {
      return { background: '#EEF4FF', color: '#0D3074' };
    } else {
      return { color: 'grey' };
    }
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  onContentChange() {
    const textarea: HTMLTextAreaElement = this.autosize.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }

  openCustomSnackbar(message: string, icon: string) {
    this.snackBar.openFromComponent(CustomSnackbarComponent, {
      data: { message: message, icon: icon },
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  attachFile() {}

  optionsMenu: Array<any> = [
    {
      header: 'Desk Shared filed',
      content: '<a href="#" class="txt">Preview data here</a>',
      icon: 'article',
    },
    {
      header: 'Data Bank',
      content: '<a href="#" class="txt">Preview data here</a>',
      icon: 'monitoring',
    },
    {
      header: 'General Public knowledge',
      content: '<span class="txt">General data via GTP-4</span>',
      icon: 'language',
    },
  ];

  constructor(private snackBar: MatSnackBar) {}
}
