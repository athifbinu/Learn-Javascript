const form =document.getElementById('shop-form');
const ItemName=document.getElementById('item-name');
const ItemQty=document.getElementById('item-qty');       //to fetching all html in to javascript
const list = document.getElementById('list');
const alert=document.getElementById('alert');
document.addEventListener('DomContentLoaded',function(){
    const items=JSON.parse(window.localStorage.getItem('items'))
    items.forEach(function(Item){
        const tr=document.createElement('tr');
        tr.innerHTML = `
        
        `
    })
    
})


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
        let items;
        items = window.localStorage.getItem('items') ? JSON.parse(window.localStorage.getItem
            ('items')) : [];
        items.push({id:rand,name:ItemName.value,qty:ItemQty.value});
        window.localStorage.setItem('items',JSON.stringify(items));
         ItemName.value = '';        //to remove the screen display on the working tyme
         ItemQty.value = '';
         alert.classList.add('alert-success');
         alert.innerHTML = 'item Added successfully !';
        setTimeout(function(){
            alert.classList.remove('alert-success');
            alert.innerHTML = '';
        },3000)                       //this funtion settimeout are allert message closing tyme


    } else {
        alert.classList.add('alert-warning');
        alert.innerHTML = 'Please Add Items !';
        setTimeout(function(){
            alert.classList.remove('alert-warning');   //button no data clicking alert meassage
            alert.innerHTML = '';
        },3000)
    }

    // Deleat
    list.addEventListener('click',function(event){
          if(event.target.classList.contains('btn')){
              event.target.parentElement.parentElement.remove();
          }
    })





})