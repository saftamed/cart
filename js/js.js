var items =[
    {
        id:0,
        prix:50,
        qte:3,
    },
    {
        id:1,
        prix:100,
        qte:2,
    },
    {
        id:2,
        prix:150,
        qte:1,
    }
]
var total = 150;
var a = document.querySelector(".items")
var tt = document.querySelector(".tt")
function getIndex(i){
   return items.findIndex((element) => element.id == i);
}
calcTotal()
function minus(i){
    const index = getIndex(i);
    if (items[index].qte>1) {
        items[index].qte--;
        var c = a.children[index];
        c.querySelector(".qte").value = items[index].qte;
        c.querySelector(".total").innerHTML = "£"+(items[index].qte * items[index].prix).toString() ;
        calcTotal()
       
    }
}
function plus(i){
    const index = getIndex(i);
    items[index].qte++;
    var c = a.children[index];
        c.querySelector(".qte").value = items[index].qte;
        c.querySelector(".total").innerHTML = "£"+(items[index].qte * items[index].prix).toString() ;
        calcTotal()

}
function del(i){
    if (confirm("Delete it ??")) {
        const index = getIndex(i);
        items = items.filter(ii => ii.id !=index);
        var c = a.children[index].remove();
        calcTotal()
    }
}
function like(i){
    const index = getIndex(i);
    var c = a.children[index];
    c.classList.toggle("like");
}



function calcTotal() {
    total = 0;
    for (const j of items) {
        total += j.prix * j.qte;
    }

    tt.innerHTML = "£"+total.toString();
}

//$0.parentElement.parentElement