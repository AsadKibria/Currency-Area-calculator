
const c_c = document.getElementById('c_c');
const msg = document.querySelector('.msg');
const convertedMsg = document.getElementById('converted_msg');

//form submit
c_c.onsubmit = (e) => {
    e.preventDefault();
    // alert()

    //get values
    let amount = c_c.querySelector('input[name="amount"]');
    let currency = c_c.querySelector('select[name="currency"]');

    if (amount.value == '' || currency.value == '' ) {
        msg.innerHTML = setAlert('All fields ate required');
    } else {
       convertedMsg.innerHTML = setAlert(currencyConverter(amount.value, currency.value), 'success') ;
    }


}




//=======Area calculator============

// get elements
const areaForm = document.getElementById('area_form');
const areaType = document.getElementById('area_type');
const details = document.getElementById('details');
const rectangle = document.querySelector('.rec');
const square = document.querySelector('.squ');
const triangle = document.querySelector('.tri');
const circle = document.querySelector('.cir');




areaType.onchange = () => {

    if  (areaType.value == 'Rectangle') {
        rectangle.style.display = 'block';
    } else {
        rectangle.style.display = '';
    }
        
    if (areaType.value == 'Square') {
        square.style.display = 'block';
    } else {
        square.style.display = '';
    }

    if (areaType.value == 'Triangle') {
        triangle.style.display = 'block';
    } else {
        triangle.style.display = '';
    }

    if (areaType.value == 'Circle') {
        circle.style.display = 'block';
    } else {
        circle.style.display = '';
    }
}


// form submit

areaForm.onsubmit = (e) => {
    e.preventDefault()

    if (areaType.value == 'Rectangle') {
        let length = areaForm.querySelector('input[name="length"]').value;
        let width = areaForm.querySelector('input[name="width"]').value;
        details.innerHTML = areaCal(areaType.value, length, width);
    } else if (areaType.value == 'Square') {
        let bahu = areaForm.querySelector('input[name="bahu"]').value;
        details.innerHTML = areaCal(areaType.value, bahu);
    } else if (areaType.value == 'Triangle') {
        let bese = areaForm.querySelector('input[name="bese"]').value;
        let height = areaForm.querySelector('input[name="height"]').value;
        details.innerHTML = areaCal(areaType.value, bese, height);
    } else if (areaType.value == 'Circle') {
        let radius = areaForm.querySelector('input[name="radius"]').value;
        details.innerHTML = areaCal(areaType.value, radius);
    }


}
