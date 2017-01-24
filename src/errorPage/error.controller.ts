interface IErrorPageConfig {
  title: string;
  helpLink: string;
  reloadUrl: string;
  supportLink: string;
  supportEmailSubject: string;
  message: string;
}

export class ErrorController {
	public config: IErrorPageConfig;

	constructor(
		private $window: ng.IWindowService
	) {
    'ngInject';
  }

	reload(): void {
		this.$window.location.reload();
	}

	mailto(email: string, subject: string): void {
		let link: string = `mailto:${email}?subject=${subject}`;
		this.$window.location.replace( link );
	}

	goToOrigin(): void {
		let origin: string = this.$window.location.origin;
		this.$window.location.replace(origin);
	}

	goToLink(link: string): void {
		this.$window.location.replace( link );
	}
}
