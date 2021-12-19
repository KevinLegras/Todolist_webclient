import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { VoiceRecognitionService } from '../voice-recognition-service/voice-recognition.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoiceComponent implements OnInit {

  voiceRecognitionService : VoiceRecognitionService;
  text: string = "";

  constructor(voiceRecognition:VoiceRecognitionService) {
    this.voiceRecognitionService = voiceRecognition;
    this.voiceRecognitionService.init();
   }

  ngOnInit(): void {
  }

  VoiceRecognition(){
    if(!this.voiceRecognitionService.isListening){
      this.voiceRecognitionService.text = "";
      this.text = "";
      this.voiceRecognitionService.start();
    }
    else{
      this.voiceRecognitionService.stop();
      this.text = this.voiceRecognitionService.text;
    }
  }

}
