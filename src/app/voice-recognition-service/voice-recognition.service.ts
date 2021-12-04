import { Injectable } from '@angular/core';


declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  recognition =  new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  isListening = false; 
  public text = '';
  tempWords = "";

  constructor() { }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'fr-FR';

    this.recognition.addEventListener('result', (e:any) => {
      const transcript = Array.from(e.results)
        .map((result:any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  start() {
    this.isListening = true;
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', () => {
      if (this.isStoppedSpeechRecog || this.tempWords == "") {
        this.recognition.stop();
        this.isListening = false;
      }
      else{
        this.recognition.stop();
        this.wordConcat();
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isListening = false;
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
    this.recognition.stop();
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords;
    this.tempWords = '';
  }
}