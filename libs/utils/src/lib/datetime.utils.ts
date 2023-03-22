enum YearTypes {
    NUMERIC = 'numeric',
    TWO_DIGITS = '2-digit',
}

enum MonthTypes {
    LONG = 'long',
    NARROW = 'narrow',
    NUMERIC = 'numeric',
    SHORT = 'short',
    TWO_DIGITS = '2-digit',
}

enum DayTypes {
    NUMERIC = 'numeric',
    TWO_DIGITS = '2-digit',
}

enum HourTypes {
    NUMERIC = 'numeric',
    TWO_DIGITS = '2-digit',
}

enum MinuteTypes {
    NUMERIC = 'numeric',
    TWO_DIGITS = '2-digit',
}

export class DateTimeUtils {
    static formatDate = (date: Date, year = YearTypes.NUMERIC, month = MonthTypes.SHORT, day = DayTypes.TWO_DIGITS) => {
        return new Intl.DateTimeFormat('en-US', { year, month, day }).format(date);
    };

    static formatTime = (date: Date, hour = HourTypes.TWO_DIGITS, minute = MinuteTypes.TWO_DIGITS, hour12: boolean) => {
        return new Intl.DateTimeFormat('en-US', { hour, minute, hour12 }).format(date);
    };
}
