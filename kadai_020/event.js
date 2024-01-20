const btn=document.getElementById('btn');
const text=document.getElementById('text');

function ChangeText(){
    text.textContent='ボタンをクリックしました';
}
btn.addEventListener('click',ChangeText);