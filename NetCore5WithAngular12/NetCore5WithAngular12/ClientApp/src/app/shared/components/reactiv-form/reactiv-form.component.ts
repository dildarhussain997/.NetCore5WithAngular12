import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from './customValidators';

@Component({
  selector: 'app-reactiv-form',
  templateUrl: './reactiv-form.component.html',
  styleUrls: ['./reactiv-form.component.css']
})
export class ReactivFormComponent implements OnInit {

  form =new FormGroup({
    emailAddress: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  form2 = new FormGroup({
    emailAddress2: new FormControl('', Validators.required),

    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5)
    ])
  });

  form3 = new FormGroup({
    emailAddress3: new FormControl('', [
      Validators.required,
      customValidators.mustContainAtTheRate,
      customValidators.mustContainOnlyOneAtTheRate

    ]),
    password3: new FormControl('', [
      Validators.required,
      customValidators.canNotContainSpace
    ])
  });

  form4 = new FormGroup({
    emailAddress4: new FormControl('', Validators.required, customValidators.MustBeUnique
    ),
    password4: new FormControl('', [
      Validators.required
    ])
  });

  form5 = new FormGroup({
    emailAddress5: new FormControl(''),
    password5: new FormControl('')
  });

  //form with form group and form control 
  form6 = new FormGroup({
    account: new FormGroup({
      emailAddress6: new FormControl('', Validators.required),
      password6: new FormControl('', Validators.required)
    })
  });

  //takes an arry of controls
  form7 = new FormGroup({
    topics: new FormArray([])
  });

  //form8 and form9 are same but one is build using traditional approach and one is build using formbuilder  
  //below form contains form control, form array, form group and nested form groupe
  // using form builder is much cleaner approach

  //form group
  form8 = new FormGroup({
    //form control
    name8: new FormControl(['', Validators.required]),
    //nested form group
    contact8: new FormGroup({
      emailAddress8: new FormControl(['', Validators.required]),
      password8: new FormControl(['', Validators.required])
    }),
    //form array
    topics8: new FormArray([])
  });

   form9: FormGroup;

  constructor(fb: FormBuilder) {
    //form group
    this.form9 = fb.group({
      // form control
      name9: fb.control(['', Validators.required]),
      //nested form group
      contact9: fb.group({
        emailAddress9: ['', Validators.required],
        password9: ['', Validators.required]
      }),
      //form array
      topics9: fb.array([])
    });
  }

  ngOnInit(): void {
  }

  get emailAddress(): any {
    return this.form.get('emailAddress');
  }
  get password(): any {
    return this.form.get('password');
  }
  get emailAddress2(): any {
    return this.form2.get('emailAddress2');
  }
  get password2(): any {
     return this.form2.get('password2');
  }
  get emailAddress3(): any {
    return this.form3.get('emailAddress3');
  }
  get password3(): any {
    return this.form3.get('password3');
  }

  get emailAddress4(): any {
    return this.form4.get('emailAddress4');
  }
  get password4(): any {
    return this.form4.get('password4');
  }

  get emailAddress5(): any {
    return this.form5.get('emailAddress5');
  }
  get password5(): any {
    return this.form5.get('password5');
  }

  get emailAddress6(): any {
    return this.form6.get('account.emailAddress6');
  }
  get password6(): any {
    return this.form6.get('account.password6');
  }

  //return form control array
  get topics(): FormArray {
    return this.form7.get('topics') as FormArray;
  }

  onLogin() {
    //TODO: immplement logic to verify credentials from api server call and then set error if login failed
    this.form5.setErrors({
      loginFailed: true
    });
  }

  // new form control to the array 
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: any) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);

    // or can use splice(staringindex, number of items to deleted)
    //this.topics.controls.splice(index, 1);
  }
}
