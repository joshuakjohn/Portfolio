import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  sendMail(){
    emailjs.send("service_ya5yob6","template_5axg5gg",{
      title: "Message from portfolio",
      name: "Joshua K John",
      from: "joshuakjohn0@gmail.com",
      message: "hi ihhihihihi",
      });
  }
    
}
