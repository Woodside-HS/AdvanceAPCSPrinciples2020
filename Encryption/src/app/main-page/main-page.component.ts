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
  VCinput: string;
  VCShiftinput: string;
  publicKeyA: number;
  publicKeyB: number;
  privateKeyA: number;
  privateKeyB: number;
  PubKeyEncrpMessage: any;
  encryptedMessage: any;
  decryptedMessage: any;
  constructor() { }

  ngOnInit(): void {
  }

  // to encrypt: encript_caesar(5);
  // to decrypt: encript_caesar(-5);
  encript_caesar(key: number): void {
	this.CCreturnArea = CCinput.replace(/([a-z])/g, 
		($1) => String.fromCharCode(($1.charCodeAt(0) + key + 26 - 97) % 26 + 97)
		).replace(/([A-Z])/g, 
		($1) => String.fromCharCode(($1.charCodeAt(0) + key + 26 - 65) % 26 + 65));
  }

  encript_Vingnere(): void {
    let key: string = "Ooga Booga";
    let dec: boolean = false; // make dec true if you wish to decode something
	var i = 0, b;
	key = key.toUpperCase().replace(/[^A-Z]/g, '');
	VCreturnArea = text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
		b = key[i++ % key.length];
		return String.fromCharCode(((ordA(a) + (dec ? 26 - ordA(b) : ordA(b))) % 26 + 65));
	});
  }

  // Converts to uppercase and removes non characters
  ordA(text: string): string {
    return text.toUpperCase().replace(/[^A-Z]/g, "");
  }

  // generates all the prime numbers between a min and max
  getPrimes(min: number, max: number): number[] {
    const result = Array(max + 1).fill(0).map((_, i) => i);
      for (let i = 2; i <= Math.sqrt(max + 1); i++) {
        for (let j = i ** 2; j < max + 1; j += i){
          delete result[j];
        }
      }
    return Object.values(result.slice(min));
  }

  // find a random number between a min and max
  getRandNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // finds 1 random prime number between a min and max
  getRandPrime (min: number, max: number): number {
    const primes = getPrimes(min, max);
    return primes[getRandNum(0, primes.length - 1)];
  }

  // creates public and private key parts
  generateKeys(): void {
    let temp1: number = getRandPrime(10, 1000);
    let temp2: number = getRandPrime(10, 1000);
    
    let q: number = 0;
    let p: number = 0;
    
    if(temp1 > temp2){ // we want q to be the bigger prime num and p to be the smaller prime num
      q = temp1;
      p = temp2;
    }
    else{
      q = temp2;
      p = temp1;
    }

    this.publicKeyA = p * q;
    this.privateKeyA = ((p - 1) * (q - 1));

    this.privateKeyB = getRandPrime((q + 1), (this.publicKeyA - 1));
    this.publicKeyB = (1/(this.privateKeyB % this.privateKeyA));
  }

  // converts a letter to a number
  // ex: convertLetterToNumber("C") returns 3
  convertLetterToNumber(str: string): number {
    var out = 0, len = str.length;
    for (let pos = 0; pos < len; pos++) {
      out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
  }

  // encrypts a message using a public key
  encript_message_public(): void {
    for(let i: number = 0; i < text.length; i++) {
      let num = convertLetterToNumber(text.charAt(i));
      let sum = Math.pow(num, publicKeyB) % publicKeyA;
      window.location.hash = (sum || 1).toLocaleString(); // converts sum to a string
      encryptedMessage = encryptedMessage.concat(sum);
    }
  }

  // decrypts a message using a private key
  decrypt_message_public(): void {
    let temp: number = Math.pow(parseInt(encryptedMessage, 10), privateKeyB) % publicKeyA; // the 10 is for base 10
    this.decryptedMessage = ((temp + 9).toString(36).toUpperCase());
  }
}
