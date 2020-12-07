// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {BoutonCustomComponent} from '../app/bouton-custom/bouton-custom.component';

export default {
  title: 'Bouton',
  component: BoutonCustomComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BoutonCustomComponent> = (args: BoutonCustomComponent) => ({
  component: BoutonCustomComponent,
  props: args,
});

export const Primaire = Template.bind({});
Primaire.args = {
  type: 'primaire',
  label: 'Primaire',
};

export const Secondaire = Template.bind({});
Secondaire.args = {
  type: 'secondaire',
  label: 'Secondaire',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  label: 'Disabled',
};
