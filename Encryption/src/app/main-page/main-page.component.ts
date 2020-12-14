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
	this.CCreturnArea = CCinput.replace(/([a-z])/g, 
		($1) => String.fromCharCode(($1.charCodeAt(0) + 5 + 26 - 97) % 26 + 97)
		).replace(/([A-Z])/g, 
		($1) => String.fromCharCode(($1.charCodeAt(0) + 5 + 26 - 65) % 26 + 65));
  }
 
    /** Enrypt a given text using key */
   encript_Vingnere(): void {
    this.VCreturnArea = Array.prototype.map.call(formatText(VCinput), (letter: string, index: number): string => {
        return String.fromCharCode((letter.charCodeAt(0) + this.VCShiftinput.charCodeAt(index % this.VCShiftinput.length) - 130) % 26 + 65)
    }).join('');
  }
 
    /** Converts to uppercase and removes non characters */
  formatText(text: string): string {
    return text.toUpperCase().replace(/[^A-Z]/g, "");
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
