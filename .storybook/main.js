module.exports = {
    stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        'storybook-dark-mode',
        'storybook-tailwind-dark-mode',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    framework: '@storybook/react',
};
