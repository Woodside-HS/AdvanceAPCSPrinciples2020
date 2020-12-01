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
	for (let i = 0; i < this.CCinput.length; i++) {
		let c = str[i];
		if (c.match(/[a-z]/i)) {
		  let code = str.charCodeAt(i);
		  if (code >= 65 && code <= 90) {
			c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
		  }
		  else if (code >= 97 && code <= 122) {
			c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		  }
		}
		CCreturnArea += c;
	}
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
