/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RhNumberPadPipe } from './rh-number-pad.pipe';

describe('Pipe: RhNumberPadPipe', () => {
  let pipe: RhNumberPadPipe;

    beforeEach(() => {
        pipe = new RhNumberPadPipe();
    });
    
    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('pad number 3 to "03"', () => {
        const value = 3;
        expect(pipe.transform(value)).toEqual('03');
    });

    it('pad string "4" to "04"', () => {
        const value = '4';
        expect(pipe.transform(value)).toEqual('04');
    });

    it('pad string "a" to "0a"', () => {
        const value = 'a';
        expect(pipe.transform(value)).toEqual('0a');
    });

    it('not pad number 42', () => {
        const value = 42;
        expect(pipe.transform(value)).toEqual('42');
    });

    it('not pad string "42"', () => {
        const value = '42';
        expect(pipe.transform(value)).toEqual('42');
    });

    it('return "00" for null value', () => {
        const value: any = null;
        expect(pipe.transform(value)).toEqual('00');
    });

    it('return "00" for undefined value', () => {
        const value: any = undefined;
        expect(pipe.transform(value)).toEqual('00');
    });

    it('return "00" for empty string value', () => {
        const value: string = '';
        expect(pipe.transform(value)).toEqual('00');
    });

    it('pad numbers less than 10 to "0#"', () => {
        let value: number = 0;
        while(value < 10) {
            let expected: string = '0' + value;
            expect(pipe.transform(value)).toEqual(expected);
            value++;
        }
    });

    it('not pad numbers greater than 10 (testing 10 - 200)', () => {
        let value: number = 10;
        while(value < 201) {
            let expected: string = '' + value;
            expect(pipe.transform(value)).toEqual(expected);
            value++;
        }
    });

    it('not pad string greater than length 1', () => {
        let value: string = 'dr';
        expect(pipe.transform(value)).toEqual(value);
        value = 'who';
        expect(pipe.transform(value)).toEqual(value);
        value = 'doctor';
        expect(pipe.transform(value)).toEqual(value);
        value = 'doctor who';
        expect(pipe.transform(value)).toEqual(value);
    });
});
