import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-voice-recognition',
  templateUrl: './voice-recognition.component.html',
  styleUrls: ['./voice-recognition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoiceRecognitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
