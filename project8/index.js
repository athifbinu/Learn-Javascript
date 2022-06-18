const form =document.getElementById('shop-form');
const ItemQty=document.getElementById('item-qty');       //to fetching all html in to javascript
const list = document.getElementById('list');


form.addEventListener('submit',function(event){
    event.preventDefault();
    if(ItemQty.value =!''){
      alert("hello")
    }
})

