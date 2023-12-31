import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { User } from "../../types/user";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  userError$: Observable<string>;
  userSuccess$: Observable<string>;
  isFormSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authServie: AuthService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userId: ["", [Validators.required]],
      password: ["", [Validators.required]],
      role: ["", [Validators.required]],
    });
  }

  onSubmit() {
     //@todo:  when form is submitted make sure relevant fields (userId, password and role) are not empty, and make an api call to create user
     // Display a successful (User added successfully) or error message (Unable to create user) to the user. You can use userSuccess$ and userError$ variables given to you for this.
 
  }
}
