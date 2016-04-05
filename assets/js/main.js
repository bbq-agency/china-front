;$(document).ready(function () {
    /**
     * Remodal
     * https://github.com/VodkaBears/Remodal
     */
    $('.js-remodal').remodal({
        // closeOnEscape: false
    });

    /**
     * EasyTabs
     * https://github.com/JangoSteve/jQuery-EasyTabs
     */
    $('.js-easytabs').easytabs({ 
        animate: true,
        animationSpeed: 200,
        tabActiveClass: 'selected',
        updateHash: false
    });

    /*  transactions history toggle */
    $('.trans-history__header a').click(function () {
        $(this).toggleClass('trans-history__open');
        $(this).parent().next('div').slideToggle('fast');
    });

    /* click tabs to close transactions history */
    $('.easytabs__nav li').click(function () {
        $('.trans-history__header').next('div').hide();
    });

    /* Exchange Points on Fun */
    function Calculation(obj) {

        for (var kay in obj) {
            this[kay] = obj[kay];
        }

        this.notIncrease(this.keyup, this.maxSum);
        this.calculation();
    }

    Calculation.prototype.calculation = function () {
        var self = this;

        $(self.keyup).keyup(function () {
            var value = $(this).val(),
                resultSum = (self.operator === 'multiplication') ? value * self.coefficient : value / self.coefficient;
                resultSum = resultSum.toFixed(0);


            $(self.element).val(value);
            $(self.input).val(resultSum);
            (self.operator !== 'multiplication') ? $(self.result).text(value) : $(self.result).text(resultSum);
        }).trigger('keyup');
    };

    Calculation.prototype.notIncrease = function (element, maxSum) {
        var self = this;

        $(element).keyup(function () {
            var currentSum = +$(this).val();

            if (currentSum > maxSum) {
                $(this).val(maxSum);
            }
        });
    };

    var multiplicationPoints = new Calculation({
        keyup: '.js-cp2fun-cp',
        element: '.js-cp2fun-cp',
        operator: 'multiplication',
        input: '.js-cp2fun-fun',
        result: '.js-cp2fun-result',
        coefficient: 1.25,
        maxSum: $('.js-cp2fun-cp').val()
    });

    var divisionPoints = new Calculation({
        keyup: '.js-cp2fun-fun',
        element: '.js-cp2fun-fun',
        operator: 'division',
        input: '.js-cp2fun-cp',
        result: '.js-cp2fun-result',
        coefficient: 1.25,
        maxSum: $('.js-cp2fun-fun').val()
    });

    /* Exchange Points on Rub */
    var multiplicationRub = new Calculation({
        keyup: '.js-rub2fun-rub',
        element: '.js-rub2fun-rub',
        operator: 'multiplication',
        input: '.js-rub2fun-fun',
        result: '.js-rub2fun-result',
        coefficient: 1.50,
        maxSum: $('.js-rub2fun-rub').val()
    });

    var divisionRub = new Calculation({
        keyup: '.js-rub2fun-fun',
        element: '.js-rub2fun-fun',
        operator: 'division',
        input: '.js-rub2fun-rub',
        result: '.js-rub2fun-result',
        coefficient: 1.50,
        maxSum: $('.js-rub2fun-fun').val()
    });

    /* Checked cashbox */
    $('.js-exchange').click(function () {
        $(this).find('input').prop('checked', true);
    });

    /* Duplication sum cashbox */
    $('.exchange__label').click(function () {
        var sum = $(this).find('.exchange__right .exchange__number').text(),
            exchangeSum = $(this).find('.js-rub2fun-fun').val(),
            result = $('.active .js-rub2fun-result');

        result = result.length ? result : $('.active .js-cp2rub-result');
        sum.length ? result.text(sum) : result.text(exchangeSum);
    });

    function DuplicationSum(obj) {
        for (var kay in obj) {
            this[kay] = obj[kay];
        }

        this.duplication();
    }

    DuplicationSum.prototype.duplication = function () {
        var self = this,
            exchangeChecked = $(self.checkedElem).parent();

        exchangeChecked.each(function () {
            var sum = $(this).find('.exchange__right .exchange__number').text();
            $(self.result).text(sum);
        });
    };

    var duplicationFun = new DuplicationSum({
        checkedElem: '#fun .exchange input:checked',
        result: '.js-rub2fun-result'
    });

    var duplicationCompp = new DuplicationSum({
        checkedElem: '#comppoints .exchange input:checked',
        result: '.js-cp2rub-result'
    });

    /* Disabled exchange */
    function Disabled(obj) {
        for (var kay in obj) {
            this[kay] = obj[kay];
        }

        this.disabledElem();
    }

    Disabled.prototype.disabledElem = function () {
        var self = this,
            allElem = $(self.allExchange).find('.exchange__left .exchange__number');

        allElem.each(function () {
            var thisSum = $(this).text();
            thisSum = +thisSum.replace(/\s/g, '');

            if (thisSum > $(self.userSum).val()) {
                $(this).closest('.exchange').addClass('exchange--disabled');
            }
        });
    };

    var disabledFun = new Disabled({
        userSum: '.js-rub2fun-rub', /* Transmit class input with number */
        allExchange: '#fun .exchange'     /* Transmit element exchange */
    });

    var disabledCompp = new Disabled({
        userSum: '.js-cp2fun-cp',
        allExchange: '#comppoints .exchange'
    });

    /* Disabled element not checked */
    $('.exchange--disabled input:checked').prop('checked', false);

    /* Validate is number */
    $(".exchange__label input[type=number]").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
});
