import {  async } from '@angular/core/testing';


describe('an async invocation inside jasmine beforeEach breaks async inside specs' , () => {

  beforeEach( async( () => {} ) );

  it('this should fail, but it doesn\'t' , async(() => {
    setTimeout( () => {
      expect(false).toBe(true);
    } , 100 );
  }));
});
