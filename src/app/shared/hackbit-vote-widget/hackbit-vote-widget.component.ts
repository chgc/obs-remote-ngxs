import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hex-hackbit-vote-widget',
  templateUrl: './hackbit-vote-widget.component.html',
  styleUrls: ['./hackbit-vote-widget.component.css']
})
export class HackbitVoteWidgetComponent implements OnInit {
  private hackbitVoteWidgetScriptIsLoading = false;
  private readonly maxAttemptToLoad = 5;

  constructor() { }

  async ngOnInit() {
    try {
      await this.loadHackbitVoteWidgetScript();
    } catch (error) {
      console.error('Hackbit Vote Widget script could not be loaded');
    }
  }

  private loadHackbitVoteWidgetScript(): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter > this.maxAttemptToLoad ? clearInterval(interval) : counter++;

        if (typeof window['HACKBIT_VOTING_WIDGET'] !== 'undefined' && window['HACKBIT_VOTING_WIDGET']) {
          return resolve();
        }
        if (!this.hackbitVoteWidgetScriptIsLoading) {
          this.hackbitVoteWidgetScriptIsLoading = true;

          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'https://www.angularattack.com/entries/148-taiwan-hex/vote.js';
          script.async = true;
          script.defer = true;
          script.onload = () => {
            this.hackbitVoteWidgetScriptIsLoading = false;
            return resolve();
          };
          script.onerror = () => {
            this.hackbitVoteWidgetScriptIsLoading = false;
            return reject();
          };
          document.getElementsByTagName('body')[0].appendChild(script);
        }
      }, 500);
    });
  }
}
