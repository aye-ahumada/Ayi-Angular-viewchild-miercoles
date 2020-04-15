import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild(HijoComponent) hijo: HijoComponent;

  enviarMensaje() {
    this.hijo.saludo('hola desde el padre');
  }

}
