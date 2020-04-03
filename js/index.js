document.querySelector('#elastic').oninput = function(){
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if(val != ''){
        elasticItems.forEach(function(elem){
            if(elem.innerText.search(val) == -1){
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else{
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = inserMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else{
         elasticItems.forEach(function(elem){
              elem.classList.remove('hide');
              elem.innerHTML = elem.innerText;
         });
    }
}
function inserMark(string, pos, len){
    return string.slice(0, pos)+ '<span>' + string.slice(pos, pos + len) + '</span>' + string.slice(pos + len);
}