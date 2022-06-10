const form =document.getElementById('shop-form');
const ItemName=document.getElementById('item-name');
const ItemQty=document.getElementById('item-qty');       //to fetching all html in to javascript
const list = document.getElementById('list');


form.addEventListener('submit', function(event){
    event.preventDefault();
    if(ItemName.value != '' && ItemQty.value != ''){
        const tr=document.createElement('tr');
        const rand=Math.floor((Math.random() * 1000) + 1);
        tr.setAttribute('id','${ranf}');
        tr.innerHTML = `
            <td>${rand}</td>
            <td>${ItemName.value}</td>
            <td>${ItemQty.value}</td>
            <td><button class="btn btn-danger">Deleat</button></td>

        
        `;

        list.appendChild(tr);
         ItemName.value = '';
         ItemQty.value = '';
         
    }

})