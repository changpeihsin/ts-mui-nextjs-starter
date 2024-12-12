import { Model } from '@stackbit/types';
// console.log(Model)

export const ThemeStyle: Model =  {
    type: 'data',
    name: 'ThemeStyle',
    label: 'Theme Style',
    singleInstance: true,
    filePath: 'content/data/style.json',
    readOnly: true,
    fields: [
        {
            type: 'enum',
            name: 'mode',
            label: 'Mode',
            controlType: 'button-group',
            options: [
                { label: 'Light', value: 'light' },
                { label: 'Dark', value: 'dark' },
                // { label: 'MiddleDark', value: 'middleDark' }

            ],
            default: 'light'
        },
        { type: 'color', name: 'primaryColor', label: 'Primary color' },
        {
            type: 'color',
            name: 'secondaryColor',
            label: 'Secondary color'
        }
    ]
};

