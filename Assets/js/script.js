const form= document.getElementById('form');




form.addEventListener('submit',function (event) {
    event.preventDefault()



    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = ( weight / (height * height)).toFixed(2);
    const value =document.getElementById('value');
    document.getElementById('infos').classList.remove('hidden');
    let description='';
    value.classList.add('normal')
    if (bmi< 18.5) {

        description='cuidado!você está abaixo do peso'


        
    }
    else if (bmi>= 18 && bmi<=25) {
        description='Você está no peso ideial'
    }
    else if (bmi> 25  && bmi<=30) {
        description='cuidado! você está com sobrepeso'
    }

    else if (bmi> 30  && bmi<=35) {
        description='cuidado! você está com obesidade moderada'
        value.classList.remove('normal')
        value.classList.add('attention')
    }
    else if (bmi> 35  && bmi<=40) {
        description='cuidado! você está com obesidade severa'
        value.classList.remove('normal')
        value.classList.add('attention')
    }
    
    else {
        description='cuidado! você está com obesidade morbida'
        value.classList.remove('normal')
        value.classList.add('attention')
    }

value.textContent=bmi.replace('.',',');
document.getElementById('description').textContent=description
})