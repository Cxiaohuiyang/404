module.exports = {

    phone_reg:(phone='')=>{
        phone = ''+phone;
        if( !phone ||  phone.length<11){
            return false;
        }
        let reg = /(^(135)|^(188)|^(155))\d{8}$/;
        return reg.test(phone);
    } ,

    repeat:(txt)=>{
        let repeat_reg = /(\b[a-zA-Z]+\b)+/g;
        return repeat_reg.test(txt);
    }

}