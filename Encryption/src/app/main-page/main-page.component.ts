import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public CCreturnArea = '';
  CCinput: string;
  VCreturnArea: any;
  VCinput: any;
  VCShiftinput: any;
  publicKeyReturn: any;
  privateKeyReturn: any;
  PubKeyEncrpMessage: any;
  encryptedMessage: any;
  decryptedMessage: string;
  constructor() { }

  ngOnInit(): void {
  }

  encript_caesar(): void {
    this.CCreturnArea = this.CCinput;
  }

  encript_Vingnere(): void {
    const input = this.VCinput;
    const shift = this.VCShiftinput;
    this.VCreturnArea = shift;
  }

  generate_keys(): void {
    this.privateKeyReturn = 'dsa';
    this.publicKeyReturn = 'asd';
  }

  encript_message_public(): void {
    const publicKey = this.publicKeyReturn;
    const input = this.PubKeyEncrpMessage;
    this.encryptedMessage = '';
  }

  decrypt_message_public(): void {
    const privateKey = this.privateKeyReturn;
    const encryptedMessage = this.encryptedMessage;
    this.decryptedMessage = '';

  }
}
