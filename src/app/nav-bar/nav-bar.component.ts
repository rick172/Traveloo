import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {LoginFormComponent} from '../login-form/login-form.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('LoginForm') LoginForm : MatDialog;
  constructor(private Dialog:MatDialog) { }

  ngOnInit(): void {
  }

  OpenLoginDialog(){
    this.Dialog.open(LoginFormComponent);
  }
}
