var searchList=[
    {id:'item1',name:'floral dress'},
    {id:'item2',name:'grey wool coat'},
    {id:'item3',name:'sneakers'},
    {id:'item4',name:'woman jeans'},
    {id:'item5',name:'headphones'},
    {id:'item6',name:'earphones'},
    {id:'item7',name:'black leather watch'},
    {id:'item8',name:'green handbag'}
]

var itemId=document.getElementById('itemId')
var main=document.getElementById('main')
var cartSec=document.getElementById('cartSec') 
var cartdiv=document.getElementById('cartdiv')
var cost=document.getElementById('cost')
var costAmount=document.getElementById('costAmount')
var inputid=document.getElementById('inputid')

li=[]

function AddToCart(itemid,pay){
    var idreq='cart'+String(itemid)
    var itemIdreq=document.getElementById(idreq)
    itemIdreq.classList.remove('unselected')
    cost.textContent=parseInt(cost.textContent)+pay
}

function cart(){
    main.classList.add('dis')
    cartSec.classList.remove('dis')
    inputid.classList.add('dis')
    costAmount.classList.remove('dis') 
    cartdiv.classList.remove('dis')
}

function deleteItem(ind,pay){
     var idreq='cart'+String(ind)
    var itemIdreq=document.getElementById(idreq)
    itemIdreq.classList.add('unselected')
    cost.textContent=parseInt(cost.textContent)-pay
}

function order(){
    alert('Your Order is successful')
}

function homefun(){
    main.classList.remove('dis')
    cartSec.classList.add('dis')
    inputid.classList.remove('dis')
    costAmount.classList.add('dis')
    cartdiv.classList.add('dis')
}

function searchInput(){
    var inputdiv=document.getElementById('inputdiv')
    var val=inputdiv.value 
    for (var item of searchList){
        var idreq=document.getElementById(item.id)
        if (item.name.includes(val)){
            idreq.classList.remove('dis')
        }else{
            idreq.classList.add('dis')
        }
    }
}


