var formHendler = {
    "send": function (that, event) {
        event.preventDefault();
        if ($(that).hasClass('formIsSend')) return false;

        var form = $(that);
        var formMessage = $(form).find('.form-message');
        formMessage.hide();

        var action = form.find('input[name=action]').val();
        var formAction = true;
        var formData = {};
        $.each(form.find('.form-field'), function () {
            if ($(this).hasClass('required')) {
                var val = $(this).val(), type = $(this).attr('type');
                if (val != "") {
                    if (type == "email") {
                        pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
                        if (!pattern.test(val)) {
                            formAction = false;
                        }
                    } else if (type == "tel") {
                        if (val.length != 13) {
                            formAction = false;
                        }
                    }
                } else {
                    formAction = false;
                }
            }
            formData[$(this).attr('name')] = $(this).val();
        });

        if (formAction) {
            $(that).addClass('formIsSend');
            var request = $.ajax({
                data: {
                    'action': action,
                    'queryParams': window.location.search,
                    'data': formData,
                },
                url: '/v1/actions',
                type: 'post',
                dataType: 'json'
            });
            request.done(function (json) {
                $(that).removeClass('formIsSend');
                if (json['error'] == 1) {
                    formMessage.text(json['message']);
                    formMessage.show();
                } else {
                    location = '/v1/order';
                }
            });
        } else {
            formMessage.text('Заполните обязательные поля');
            formMessage.show();
            setTimeout(function () {
                formMessage.hide();
            }, 3000);
        }
    },
    'setProductInfo': function (productName) {
        $('.popup form').find('input[name="action"]').val('buyOne');
        $('.popup form').find('input[name="productName"]').val(productName);
    }
}
