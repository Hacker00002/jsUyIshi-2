alert("DTM-davlat test markaziga xush kelibsiz :)")

let student = prompt("To'plagan balingizni kiriting")
if(student < 80){
    alert("Sizning toplagan balingiz yetarli emas siz oqishga qabul qilinmadingiz :(")
}else if(student > 80 &&  student <= 100){
    alert("Siz super-kontrakt asosida o'qishga tavsiya qilindingiz kontrakt yiliga 3000$ pulingiz bormi")
}else if(student > 100 && student <= 150){
    alert("Siz kontrakt asosida qabul qilindizngiz kontrakt yiliga 2000$ pulingiz bormi")
}else if(student > 150 && student == 180){
    alert("Siz grant asosida o'qishga qabul qilindingiz :)")
}

let money = prompt("Pulingizni kiriting")
if(money < 3000){
    alert("Sizning pulingiz yetarliemas :(")
}else if(money >= 3000){
    alert("Sizning pilingiz yetarli,siz oqishga kirdingiz")
}else if(money < 2000){
    alert("Sizning pulingiz yetarliemas :(")
}else if(money >= 2000){
    alert("Sizning pulingiz yetarli,siz oqishga kirdingiz")
}