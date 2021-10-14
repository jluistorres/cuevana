import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class AuthSignInComponent implements OnInit {
  form: FormGroup;
  isValid: boolean;
  isLoading: boolean;
  @ViewChild('pwdInput', { static: false }) pwdInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    // private sesionService: SesionService,
    private router: Router,
    private cRef: ChangeDetectorRef
  ) {
    this.form = fb.group({
      tipodoc: ['DNI', Validators.required],
      numdoc: [null, [Validators.required, Validators.minLength(8)]],
      password: [null]
    });
  }

  ngOnInit() {
    this.isLoading = false;

  }

  validar() {
    if (this.isValid) {
      const values = this.form.value;
      // console.log(values);
      this.isLoading = true;
      setTimeout(() => {
        // this.sesionService.create(values.numdoc);
        this.router.navigateByUrl('/');
      }, 500);
    }
    if (this.form.valid) {
      // Consultar a la base de datos que el dni existe
      this.isValid = true;

      // Pasamos el focus al password
      this.cRef.detectChanges();
      this.pwdInput.nativeElement.focus();
    }
  }

  validarNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      // Usando la definición del DOM level 2, "return" NO funciona.
      e.preventDefault();
    }
  }

}