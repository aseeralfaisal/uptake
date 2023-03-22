import * as _ from 'lodash';
import slugify from 'slugify';

export class StringUtils {
    static capitalize(text = ''): string {
        return _.capitalize(text);
    }

    static lowerCase(text = ''): string {
        return _.lowerCase(text);
    }

    static lowerFirst(text = ''): string {
        return _.lowerFirst(text);
    }

    static upperCase(text = ''): string {
        return _.upperCase(text);
    }

    static upperFirst(text = ''): string {
        return _.upperFirst(text);
    }

    static kebabCase(text = ''): string {
        return _.kebabCase(text);
    }

    static trim(text = ''): string {
        return _.trim(text);
    }

    static split(text = '', separator = '-', limit = 0): string[] {
        if (limit === 0) {
            return _.split(text, separator);
        }

        return _.split(text, separator, limit);
    }

    static escape(text = ''): string {
        return _.escape(text);
    }

    static unescape(text = ''): string {
        return _.unescape(text);
    }

    static truncate(text = '', length = 100, omission = '...', separator = /,? +/): string {
        return _.truncate(text, { length, omission, separator });
    }

    static slug(text = ''): string {
        return slugify(text, {
            lower: true,
            remove: /[*+~.()'"!:&#%^@]/g,
            replacement: '-',
            strict: true,
            trim: true
        });
    }
}
