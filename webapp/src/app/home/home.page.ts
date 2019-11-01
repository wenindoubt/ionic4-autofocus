import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public myForm: FormGroup;
  @ViewChild('autoFocusTextArea', { static: true })
  autoFocusTextArea: IonTextarea;

  public constructor(private readonly fb: FormBuilder) {}

  public ngOnInit(): void {
    this.myForm = this.fb.group({
      description: ''
    });
  }

  public ionViewDidEnter(): void {
    setTimeout(() => {
      this.autoFocusTextArea.setFocus();
    }, 150);
  }
}
