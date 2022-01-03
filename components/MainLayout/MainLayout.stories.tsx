import Head from 'next/head';
import { MainLayout } from './index';

export default {
    title: 'MainLayout',
};

const Template = (arguments_) => <MainLayout {...arguments_} />;

export const Primary = Template.bind({});

Primary.args = {
    classes: 'h-40 w-full',
    children: 'Primary',
};
