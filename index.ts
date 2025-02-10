import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Untitled Prompt</h1>
      <textarea [(ngModel)]="userInput" placeholder="Enter your prompt"></textarea>
      <button (click)="submitPrompt()">Submit</button>
      <div *ngIf="response">
        <h2>Response:</h2>
        <p>{{ response }}</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    textarea {
      width: 100%;
      height: 100px;
      margin-bottom: 10px;
    }
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class AppComponent {
  userInput: string = '';
  response: string | null = null;

  async submitPrompt() {
    try {
      const res = await axios.post('https://mockup-api-e6n8.onrender.com', { // Updated endpoint
        prompt: this.userInput
      });
      this.response = res.data.response;
    } catch (error) {
      console.error("Error fetching response", error);
    }
  }
}
