module.exports = function toReadable (number) {
    let strnum=String(number);
    let nummass =strnum.split('');
    let massnumber ={0:'zero',1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'};
    let massten ={10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen'};
    let massdes ={20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety'};
    if (strnum.length==1){
        return massnumber[strnum];
    }
    if (strnum.length==2&&number<20){
        return massten[strnum];
    }
    if (strnum.length==2&&number%10==0&&number!=10){
        return massdes[strnum];
    }
    if (strnum.length==2&&number%10!=0&&number>19){
        return massdes[nummass[0]*10]+' '+massnumber[nummass[1]];
    }
    if (strnum.length==3&&number%100==0){
        return massnumber[nummass[0]]+' hundred';
    }
    if (strnum.length==3&&number%100!=0&&number%10==0&&nummass[1]>1){
        return massnumber[nummass[0]]+' hundred'+' '+massdes[nummass[1]*10];//520
    }
    if (strnum.length==3&&nummass[1]<2&&nummass[1]>0){
        return massnumber[nummass[0]]+' hundred'+' '+massten[Number(nummass[1]*10)+Number(nummass[2])];//519
    }
    if (strnum.length==3&&nummass[1]<1){
        return massnumber[nummass[0]]+' hundred'+' '+massnumber[nummass[2]];//509
    }
    if (strnum.length==3&&number%10!=0&&nummass[1]>1){
        return massnumber[nummass[0]]+' hundred'+' '+massdes[nummass[1]*10]+' '+massnumber[nummass[2]];//529
    }
}
