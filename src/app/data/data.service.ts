import { Injectable } from '@angular/core';

import { Silaba } from '../silaba/silaba.class';
import { m, n, p, s, vocales } from './data';

@Injectable()
export class SilabasData {
   getVocalesData(): Promise<Silaba[]> { return Promise.resolve(vocales) }
   getMData(): Promise<Silaba[]> { return Promise.resolve(m) }
   getNData(): Promise<Silaba[]> { return Promise.resolve(n) }
   getSData(): Promise<Silaba[]> { return Promise.resolve(s) }
   getPData(): Promise<Silaba[]> { return Promise.resolve(p) }
}