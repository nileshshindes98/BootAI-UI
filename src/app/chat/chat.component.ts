import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatInputModule,FormsModule,MatIconModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{ 
  message: string = '';

  constructor() {}

  ngOnInit(): void {}

  sendMessage(): void {
 
    console.log('Sending message:', this.message);

    this.sendGeminiMessage(this.message);

    this.message = '';
  }

  private sendGeminiMessage(message: string) {

  }
}
