(function(){
	var dir = "assets/payment-methods-icons/";
    var fileextension = ".png";
    var imgTags = '';
    const images = [
        'finance_payment_paypal_icon',
        //'card_payment_unionpay_icon',
        //'paypal_method_payment_icon',
        'master_method_card_payment_icon',
        'visa_method_card_payment_icon',
        'american express_amex_billing_credit card_payment_icon',
        'card_money_payment_payu_icon',
        //'apple_logo_logos_pay_icon',
        //'card_club_diners_dinner_payment_icon',
        'logo_pay_google_gpay_icon'
      ];

    images.forEach(url => {
        var imgTag = '<img src="http://' +window.location.host+ '/'+dir + url + fileextension + '" alt>';
        imgTags += imgTag;
        console.log('image : '+imgTag);
    });
	
    document.getElementById('payment-icons').innerHTML = imgTags;
})();