import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
        trigger('fadeInOut', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate('300ms ease-in', style({ opacity: 1 }))
          ]),
          transition(':leave', [
            animate('300ms ease-out', style({ opacity: 0 }))
          ])
        ])
  ]
})

export class ContactComponent {

  constructor(private fb: FormBuilder){

  }

  form: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    from_email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  })

  async sendMail(){
    if(this.form.valid){
      emailjs.init('QKyZDj3rDh6wJinl1')
      let response = await emailjs.send("service_ya5yob6","template_5axg5gg",{
      title: "Message from portfolio",
      name: this.form.value.from_name,
      from: this.form.value.from_email,
      message: this.form.value.message,
      });

      alert("Message has been sent")
      this.form.reset()
    } else {
      this.form.markAllAsTouched();
    }
    
  }

}
