

import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-screen',
  standalone: true,
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './form-screen.component.html',
  styleUrl: './form-screen.component.css'

})
export class FormScreenComponent {
     dataForm: FormGroup;

    constructor(public fb: FormBuilder, private httpclient:HttpClient) {
        this.dataForm = this.fb.group({
            name: [''],
            email: [''],
        });
    }


    submitData() {
      
        this.httpclient.post('https://mybackendapi.azurewebsites.net/api/data', this.dataForm.value)
            .subscribe(response => console.log(response));
    }
}
