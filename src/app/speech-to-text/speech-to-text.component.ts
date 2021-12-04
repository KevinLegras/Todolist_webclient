import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeechToTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
