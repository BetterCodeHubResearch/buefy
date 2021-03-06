export default [
    {
        props: [
            {
                name: '<code>type</code>',
                description: 'Type (color) of the field and help message, also adds a matching icon, optional. Used by Input, Select and Autocomplete',
                type: 'String',
                values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                    <code>is-warning</code>, <code>is-danger</code>,
                    and any other colors you've set in the <code>$colors</code> list on Sass`,
                default: '—'
            },
            {
                name: '<code>label</code>',
                description: 'Field label',
                type: 'String',
                values: '—',
                default: '—'
            },
            {
                name: '<code>label-for</code>',
                description: 'Same as native <code>for</code> set on the label',
                type: 'String',
                values: '—',
                default: '—'
            },
            {
                name: '<code>message</code>',
                description: 'Help message text',
                type: 'String, Array<String>',
                values: '—',
                default: '—'
            },
            {
                name: '<code>grouped</code>',
                description: 'Direct child components/elements of Field will be grouped horizontally (see which ones at the top of the page)',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>group-multiline</code>',
                description: 'Allow controls to fill up multiple lines, making it responsive',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>position</code>',
                description: 'Which position should the addons appear, optional',
                type: 'String',
                values: '<code>is-centered</code>, <code>is-right</code>',
                default: '—'
            },
            {
                name: '<code>addons</code>',
                description: 'Field automatically attach controls together',
                type: 'Boolean',
                values: '—',
                default: '<code>true</code>'
            }
        ]
    }
]
