import { GitContentSource } from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';
import { allModels } from './.stackbit/models';

const gitContentSource = new GitContentSource({
    rootPath: __dirname,
    contentDirs: ['content'],
    models: Object.values(allModels),
    assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
    }
});

console.log({gitContentSource})
export const sbConfig = defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [gitContentSource],
    presetSource: {
        type: 'files',
        presetDirs: ['.stackbit/presets']
    },
    styleObjectModelName: 'ThemeStyle',
    sidebarButtons: [
        {
            label: "External link",
            type: "link",
            icon: "user-management",
            url: "my-live-site.com"
          }
      ]
});

export default sbConfig;

