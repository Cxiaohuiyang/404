let {phone_reg:phone , repeat:repeat} = require('./index'),
  {expect:expect} = require('chai');
 
describe('手机号码简单校验',()=>{
    it('18812345678',()=>{  
        expect(phone('18812345678')).to.be.ok;
    }); 
     it('188123456789',()=>{  
        expect(phone('188123456789')).to.be.equal(false);
    }); 
    it('188222w22222',()=>{
          expect(phone('188222w22222')).to.be.equal(false);
    });
});

 
describe('重复单词',()=>{
    it('foo foo bar',()=>{  
        expect(repeat('foo foo bar')).to.be.ok;
    }); 
    it('foo bar foo',()=>{  
        expect(repeat('foo bar foo')).to.be.equal(false);
    }); 
    it('foo  barbar bar',()=>{  
        expect(repeat('foo  barbar bar')).to.be.equal(false);
    }); 
     it('foo  bar bar bar',()=>{  
        expect(repeat('foo bar bar bar')).to.be.ok;
    }); 
    it('  bar bar d bar',()=>{  
        expect(repeat(' bar bar d bar')).to.be.ok;
    });
     it('  barr bar bar',()=>{  
        expect(repeat('bsrr bar bar')).to.be.ok;
    });
});
