block('input').mod('has-calendar', true)(
    def()(function() {
        var ctx = this.ctx;

        return applyNext({ _calendar: {
            earlierLimit: ctx.earlierLimit,
            laterLimit: ctx.laterLimit,
            weekdays: ctx.weekdays,
            months: ctx.months,
            val: ctx.val
        } });
    }),
    elem('box').content()(function() {
        return [
            applyNext(),
            { elem: 'calendar' },
            {
                block: 'calendar',
                mods: { theme: this.mods.theme, format: this.mods['calendar-format'], nav: this.mods['calendar-nav'], 'select-size': this.mods.size },
                mix: [
                    {
                        block: 'popup',
                        mods: {
                            'has-calendar': true,
                            theme: 'islands',
                            target: 'anchor'
                        }
                    }
                ],
                js: this._calendar
            }
        ];
    })
);
