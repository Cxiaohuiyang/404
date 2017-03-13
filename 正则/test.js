let {phone_reg:phone , repeat:repeat , email:email} = require('./index'),
  {expect:expect} = require('chai');
 
var path = require('path');
var fs = require('fs');
var url = require('url');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}
console.log(resolveApp('../../aa.js'));

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
describe("邮箱",()=>{
    it('bsrr bar bar',()=>{  
        expect(email('bsrr bar bar')).to.be.equal(false);
    });
      it('xxx_ddd_dd@ar.bar',()=>{  
        expect(email('xxx_ddd_dd@ar.bar')).to.be.ok;
    });
     it('bsrr@bar.bar',()=>{  
        expect(email('bsrr@bar.bar')).to.be.ok;
    });
    it('bsrr_www@bar.bar',()=>{  
        expect(email('bsrr_www@bar.bar')).to.be.ok;
    });
});