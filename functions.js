/**
 * Alert function
 */

 const setAlert = (smg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${smg} <button data-bs-dismiss="alert" class=" btn-close"></button> </p>`;
}

/**
 * Email check
 */

const emailCheck = (email) => {
    let pattern = /^[a-z0-9\._]{1,}@[a-z]{1,}\.[a-z]{1,4}$/;
    return pattern.test(email);
}

/**
 * BD Phone number check
 */

const phoneCheck = (phone) => {
    let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
    // let pattern = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
    return pattern.test(phone);

}


/**
 * Currency Converter 
 */

const currencyConverter = (amount, currency) => {
    switch (currency) {
        case 'USD':
            rate = 105.74;
            break;
        case 'EUR':
            rate = 109.34;
            break;
        case 'JPY':
            rate = 0.76;
            break;
        case 'GBP':
            rate = 126.41;
            break;
        case 'AUD':
            rate = 70.34;
            break;
        case 'CAD':
            rate = 78.34;
            break;
        case 'INR':
            rate = 1.29;
            break;
        case 'SAR':
            rate = 28.14;
            break;
        case 'RUB':
            rate = 1.72;
            break;

    }
    let total = amount * rate;
    return `${amount} ${currency} = ${ total.toFixed(2) } BDT` ;
}




/**
 * Area calculator
 */

const areaCal = (type, value1, value2 = '') => {

    if (type == 'Rectangle') {
        return setAlert(`The area of a Rectangle is ${value1 * value2}`, `success`) 
    }else if (type == 'Square') {
        return setAlert(`The area of a Square is ${value1 * value1}`, `success`) 
    }else if (type == 'Triangle') {
        return setAlert(`The area of a Triangle is ${ .5 * value1 * value2}`, `success`) 
    }else if (type == 'Circle') {
        return setAlert(`The area of a Circle is ${3.1416 * (value1 * value1)}`, `success`) 
    }

}
