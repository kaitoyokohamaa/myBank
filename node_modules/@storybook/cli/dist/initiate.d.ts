import { IPackage } from 'update-notifier';
import { StoryFormat } from './project_types';
declare type CommandOptions = {
    useNpm?: boolean;
    type?: any;
    force?: any;
    html?: boolean;
    skipInstall?: boolean;
    storyFormat?: StoryFormat;
    parser?: string;
    yes?: boolean;
};
export default function (options: CommandOptions, pkg: IPackage): Promise<void>;
export {};
