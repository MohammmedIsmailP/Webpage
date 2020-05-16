$(document).ready(() => {
    function show_stat(weapon_name) {
        weapons.forEach((e) => {
            if (e.name === weapon_name) {
                $('#damage').text(e.damage);
                $('#fire_rate').text(e.fire_rate);
                $('#range').text(e.range);
                $('#accuracy').text(e.accuracy);
                $('#weight').text(e.weight);
                $('#value').text(e.value);
            }
        });
    }

    var weapons = [{
        "name": ".44_pistol",
        "damage": 48,
        "fire_rate": 6,
        "range": 119,
        "accuracy": 66,
        "weight": 4.2,
        "value": 99
    }, {
        "name": "10mmpistol",
        "damage": 18,
        "fire_rate": 46,
        "range": 119,
        "accuracy": 61,
        "weight": 4.2,
        "value": 53
    }, {
        "name": "assaultrifle",
        "damage": 30,
        "fire_rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 13.1,
        "value": 144
    }]
    
    show_stat('.44_pistol')
    $('.container.item-list li a').mouseenter((e) => {
        show_stat($(e.currentTarget).attr('id'));
    });

    $('.container.item-list li a').click((e) => {
        $('.container.item-list li a.active').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('.container.item-list').mouseleave(() => {
        show_stat($('.container.item-list li a.active').attr('id'));
    });

});