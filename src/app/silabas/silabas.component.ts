import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SilabasData } from '../data/data.service';
import { Silaba } from '../silaba/silaba.class';
import { moveInLeft } from '../animation/animation';

@Component({
  selector: 'app-silabas',
  templateUrl: './silabas.component.html',
  styleUrls: ['./silabas.component.css'],
  animations: [moveInLeft()]
})
export class SilabasComponent implements OnInit {

  private state: string = '';

  private play: boolean = false;
  private finishGame: boolean = false;
  private silabasForm: FormGroup;
  private randomValue: Silaba;
  private randomResult = [];
  private correctas: number = 0;
  private incorrectas: number = 0;


  private vocalesData: Silaba[];
  private mData: Silaba[];
  private nData: Silaba[];
  private sData: Silaba[];
  private pData: Silaba[];

  private fullData: Silaba[];

  constructor(
    private silabasData: SilabasData,
    private fb: FormBuilder) {
    this.silabasForm = fb.group({
      checkVocales: [false],
      checkM: [false],
      checkN: [false],
      checkP: [false],
      checkS: [false]
    });
  }

  async ngOnInit() {
    this.vocalesData = await this.silabasData.getVocalesData();
    this.mData = await this.silabasData.getMData();
    this.nData = await this.silabasData.getNData();
    this.sData = await this.silabasData.getSData();
    this.pData = await this.silabasData.getPData();
  }

  startForm() {
    this.silabasForm = this.fb.group({
      checkVocales: [false],
      checkM: [false],
      checkN: [false],
      checkP: [false],
      checkS: [false]
    });
  }

  playGame({ value, valid }: { value: any, valid: boolean }) {
    if (value.checkVocales || value.checkM || value.checkN || value.checkP || value.checkS) {
      this.play = !this.play;

      this.fullData = [];

      if (value.checkVocales) {
        this.fullData = this.fullData.concat(this.vocalesData);
      }
      if (value.checkM) {
        this.fullData = this.fullData.concat(this.mData);
      }
      if (value.checkN) {
        this.fullData = this.fullData.concat(this.nData);
      }
      if (value.checkS) {
        this.fullData = this.fullData.concat(this.sData);
      }
      if (value.checkP) {
        this.fullData = this.fullData.concat(this.pData);
      }
      this.randomSilaba();
    }
  }

  restartGame() {
    this.play = !this.play;
    this.startForm();
    this.randomResult = [];
    this.finishGame = false;
    this.correctas = 0;
    this.incorrectas = 0;
  }

  countFrecuency(value) {
    let inArray: boolean = false;

    this.randomResult.forEach(item => {
      if (item.silaba === value.char) {
        item.count += 1;
        inArray = true;
        if (item.count == 2) {
          this.fullData.splice(this.fullData.indexOf(value), 1);
        }
      }
    });

    if (!inArray) {
      this.randomResult.push({ silaba: value.char, count: 1 });
    }
  }

  randomSilaba() {
    this.randomValue = this.fullData[Math.floor(Math.random() * this.fullData.length)];

    if (this.fullData.length > 0) {
      this.countFrecuency(this.randomValue);
    } else {
      this.finishGame = true;
    }
  }

  countCorrectSilaba() {
    this.correctas++;
    this.randomSilaba();
  }

  countIncorrectSilaba() {
    this.incorrectas++;
    this.randomSilaba();
  }

}
