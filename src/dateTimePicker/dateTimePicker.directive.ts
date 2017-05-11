import Flatpickr from 'flatpickr';
import * as moment from 'moment-timezone';

export function dateTimePicker($compile, $translate) {
    'ngInject';

    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            format: '@?',
            min: '<?',
            time: '<?',
            timezoneId: '<?stripTimezone',
            now: '&?nowCb',
            today: '&?todayCb',
            eventDay: '&?eventDayCb',
            eventStart: '&?eventStartCb'
        },
        link: function (scope, element, attr, ngModel) {
            let hotButtonsCreated = false;
            const watchers = [];
            const FORMAT = 'YYYY-MM-DDTHH:mm:00.000';
            const PARSE_FORMAT = scope.time ? 'MMM DD, YYYY h:mmA' : 'MMM DD, YYYY';
            const precision = attr.precision || 'minute';
            const onOpen = (selectedDates, dateStr, instance) => !hotButtonsCreated && createHotButtons(instance);
            const config = {
                onOpen,
                enableTime: scope.time,
                dateFormat: scope.format || 'M j, Y'
            };

            const createHotButtons = (instance) => {
                const generateButton = (key, cb) => {
                    const title = $translate.instant(key);
                    return angular.element(`<button ng-click="${cb}()" class="flatpickr__footer-button">${title}</div>`)
                };
                hotButtonsCreated = true;
                const datePickerContainer = angular.element(instance.calendarContainer);
                const datePickerFooter = angular.element('<div class="flatpickr__footer"></div>');
                scope.now && datePickerFooter.append(generateButton('Datepicker-buttons-now', 'now'));
                scope.today && datePickerFooter.append(generateButton('Datepicker-buttons-today', 'today'));
                scope.eventDay && datePickerFooter.append(generateButton('Datepicker-buttons-event-day', 'eventDay'));
                scope.eventStart && datePickerFooter.append(generateButton('Datepicker-buttons-event-start', 'eventStart'));
                $compile(datePickerFooter)(scope);
                datePickerContainer.append(datePickerFooter);
            };

            const setTzDate = date => moment(new Date(date)).tz(scope.timezoneId).format(FORMAT);

            const checkValidity = (date) => {
                if (!date || !ngModel.$viewValue) {
                    return;
                }
                if (scope.min) {
                    const isBefore = moment(new Date(date)).isBefore(moment(new Date(scope.min)), precision);
                    const isSame = !attr.precision && moment(new Date(date)).isSame(moment(new Date(scope.min)), precision);
                    ngModel.$setValidity('min', !(isBefore || isSame));
                    ngModel.$setDirty();
                } else {
                    ngModel.$setPristine();
                }
            };

            if (attr.min && scope.min) {
                config.minDate = attr.stripTimezone ? setTzDate(scope.min) : new Date(scope.min);
            }

            const fltpkr = new Flatpickr(element[0], config);

            ngModel.$render = () => {
                if (ngModel.$viewValue) {
                    if (attr.stripTimezone) {
                        fltpkr.setDate(setTzDate(ngModel.$viewValue));
                    } else {
                        fltpkr.setDate(new Date(ngModel.$viewValue));
                    }
                } else if (ngModel.$viewValue === null) {
                    fltpkr.clear();
                    ngModel.$setPristine();
                }
            };

            if (attr.min) {
                const minWatch = scope.$watch('min', (newValue, oldValue) => {
                    if (newValue !== oldValue) {
                        let dateString = '';
                        if (moment(new Date(ngModel.$viewValue)).isValid()) {
                            dateString = moment(new Date(ngModel.$viewValue)).utc().format(FORMAT);
                        } else {
                            dateString = attr.stripTimezone ?
                                moment.tz(moment(ngModel.$viewValue, PARSE_FORMAT), scope.timezoneId).utc().format(FORMAT) :
                                moment(ngModel.$viewValue, PARSE_FORMAT).utc().format(FORMAT)
                        }
                        checkValidity(dateString + 'Z');
                        if (attr.stripTimezone) {
                            fltpkr.set('minDate', setTzDate(newValue));
                        } else {
                            fltpkr.set('minDate', new Date(scope.min));
                        }

                        // to prevent required error in untouched state
                        if (!ngModel.$touched && !ngModel.$error.min) ngModel.$setPristine();
                    }
                });
                watchers.push(minWatch);
            }

            if (attr.stripTimezone) {
                ngModel.$parsers.push(date => {
                    if (date) {
                        if (scope.time) {
                            const dateString = moment.tz(moment(date, PARSE_FORMAT).format(FORMAT), scope.timezoneId).utc().format(FORMAT) + 'Z';
                            checkValidity(dateString);
                            return dateString;
                        } else {
                            const dateString = moment.tz(moment(date, PARSE_FORMAT).startOf('day').format(FORMAT), scope.timezoneId).utc().format(FORMAT) + 'Z';
                            checkValidity(dateString);
                            return dateString;
                        }
                    } else {
                        // in order to prevent $error: { $parse: true }
                        return '';
                    }
                });
            } else {
                ngModel.$parsers.push(date => {
                    let dateString = moment(date, PARSE_FORMAT).format(FORMAT) + 'Z';
                    if (scope.time) {
                        dateString = moment(date, PARSE_FORMAT).utc().format(FORMAT) + 'Z';
                    }
                    checkValidity(dateString);
                    return dateString;
                });
            }

            scope.$on('$destroy', () => {
                fltpkr.destroy();
                watchers.forEach(w => w());
            });
        }
    };
}
