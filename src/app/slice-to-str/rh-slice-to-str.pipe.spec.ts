/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RhSliceToStrPipe } from './rh-slice-to-str.pipe';

describe('Pipe: RhSliceToStrPipe', () => {
    let pipe: RhSliceToStrPipe;

    beforeEach(() => {
        pipe = new RhSliceToStrPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('return value if null"', () => {
        const value: string = null;
        expect(pipe.transform(value)).toEqual(value);
    });

    it('trim to space if no argument provided"', () => {
        const value: string = 'Wibbly Wobbley';
        const expected: string = 'Wibbly';
        expect(pipe.transform(value)).toEqual(expected);
    });

    it('trim to provided character in argument"', () => {
        const value: string = 'Come along, Pond!';
        const arg: string = ',';
        const expected: string = 'Come along';
        expect(pipe.transform(value, arg)).toEqual(expected);
    });

    it('trim to provided string in argument"', () => {
        const value: string = "Trust me... I'm the doctor";
        const arg: string = '...';
        const expected: string = 'Trust me';
        expect(pipe.transform(value, arg)).toEqual(expected);
    });

    it('return full value if argument not found"', () => {
        const value: string = 'Come along Pond';
        const arg: string = ',';
        expect(pipe.transform(value, arg)).toEqual(value);
    });

    it('return full value no space and no argument"', () => {
        const value: string = 'Timey-Wimey';
        expect(pipe.transform(value)).toEqual(value);
    });

});
