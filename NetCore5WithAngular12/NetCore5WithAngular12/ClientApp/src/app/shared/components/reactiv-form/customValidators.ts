import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class customValidators {

  static canNotContainSpace(control: AbstractControl): ValidationErrors | null {

    if ((control.value as string).indexOf(' ') > 0) {
      return {
        canNotHaveSpace: true
      }
    }
    return null;
  }


  static mustContainAtTheRate(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf('@') <= 0) {
      return {
        mustHaveAtTheRate: true
      }
    }
    return null;
  }

  static mustContainOnlyOneAtTheRate(control: AbstractControl): ValidationErrors | null {

    let noOfRepeatedChar: number | undefined = (control.value as string).match(new RegExp("@", "g"))?.length;
    if (noOfRepeatedChar != undefined && noOfRepeatedChar > 1) {
      //below object return validation error true and detail of values 
      return {
        mustHaveOnlyOneAtTheRate: true,
        detail: {
          requireLength: 1,
          actualLength: noOfRepeatedChar
        }
      }
    }
    return null;
  }

  // this is an async custom validator which can be used to call backend API's. it retunr either Promise or observable 
  static MustBeUnique(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    // here we are returning a promsie but we can return an observale too
    // a promsie or an obervable takes two optional parameter/functions (resolve and reject) . resolve is used to return data when function successfull run and reject is used to return an error message from server side
    //resolve and reject can be parameters or functions
    // re
    return new Promise((resolve, reject) => {
      //here we are using time function to delay 2 secounds but in real life we will use async call to server
      setTimeout(() => {
        if (control.value == 'dildar@gmail.com') {
          resolve({ MustBeUniqueId: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });

  }
  
}

