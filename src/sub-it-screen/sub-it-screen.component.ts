import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sub-it-screen',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './sub-it-screen.component.html',
  styleUrl: './sub-it-screen.component.css'
})
export class SubItScreenComponent {
  // dataForm: FormGroup;

  // constructor(private fb: FormBuilder, private http: HttpClient) {
  //     this.dataForm = this.fb.group({
  //         name: [''],
  //         email: [''],
  //     });
  // }

  // submitData() {
  //     this.http.post('https://your-backend-url/api/data', this.dataForm.value)
  //         .subscribe(response => console.log(response));
  // }

}
