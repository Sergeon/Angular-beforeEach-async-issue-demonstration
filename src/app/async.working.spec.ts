import {  async } from '@angular/core/testing';

describe('beforeEach with no async calls with allow async inside specs to work as expected' , function(){
    beforeEach( () => {});

    it('this will fail, as expected' , async(() => {
        setTimeout( () => {
            expect(true).toBe(false);
        } , 100 );
    }));
});
