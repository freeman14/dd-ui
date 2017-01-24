let organisms: stotybook.ISection = sb.section('Organisms');

organisms.story('Organisms')
    .add('Tabs', require('./tabs.html'))
    .add('Error Pages', require('./errorPage.html'), {
      "error": {
        "title": "Something Went Wrong",
        "message": "Oops, an unknown error occurred. Please try reloading the page. If you continue to get this error, email us and we’ll help out!",
        "reloadLink": "Reload page",
        "supportLink": "Contact Support",
        "supportLinkEmail": "customersupport@doubledutch.me",
        "supportEmailSubject": "I got an error while setting up my event",
        "helpLink": "Help",
        "helpLinkUrl": "https://doubledutch.zendesk.com/hc/en-us"
      },
      "maintenance": {
        "title": "Down for Maintenance",
        "message": "We’re updating our systems so they can run as smoothly as possible. Sorry for the inconvenience — we’ll be back soon!",
        "helpLink": "Help",
        "helpLinkUrl": "https://doubledutch.zendesk.com/hc/en-us"
      },
      "notFound": {
        "title": "404: Page Not Found",
        "message": "Aww shucks, we can’t find that page. Perhaps you’re looking for one of these:",
        "eventContentLink": "Event Content",
        "eventContentLinkUrl": "",
        "eventLayoutLink": "Event Layout",
        "eventLayoutLinkUrl": "",
        "helpLink": "Help",
        "helpLinkUrl": "https://doubledutch.zendesk.com/hc/en-us"
      }
    });
