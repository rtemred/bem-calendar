module.exports = function(bh) {
    bh.match('input_has-calendar', function(ctx, json) {
        ctx.tParam('calendar', {
            earlierLimit: json.earlierLimit,
            laterLimit: json.laterLimit,
            weekdays: json.weekdays,
            months: json.months,
            val: json.val
        });
    });

    bh.match('input_has-calendar__box', function(ctx) {
        var box = ctx.json();

        box.content = [].concat(
            box.content,
            { elem: 'calendar' },
            {
                block: 'calendar',
                mix: [
                    {
                        block: 'popup',
                        mods:
                        {
                            'has-calendar': true,
                            theme: 'islands',
                            target: 'anchor'
                        }
                    }
                ],
                mods: {
                    theme: ctx.node.mods.theme,
                    format: ctx.node.mods && ctx.node.mods['calendar-format'],
                    nav: ctx.node.mods['calendar-nav'],
                    'select-size': ctx.node.mods['calendar-nav'] && ctx.node.mods.size
                },
                js: ctx.tParam('calendar')
            }
        );

        return box;
    });
};
