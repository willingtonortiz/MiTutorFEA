import { Component, OnInit, OnDestroy } from "@angular/core";
import { ModalManagerService } from "../../services";
import { Subscription } from "rxjs";

@Component({
	selector: "app-profile-container",
	templateUrl: "./profile-container.component.html",
	styleUrls: ["./profile-container.component.scss"]
})
export class ProfileContainerComponent implements OnInit, OnDestroy {
	private suscriptions: Array<Subscription>;

	public displayModal: boolean;

	constructor(private _modalManagerService: ModalManagerService) {
		this.suscriptions = new Array<Subscription>();
		this.suscriptions.push(
			this._modalManagerService.displayModalObservable.subscribe({
				next: (displayModal: boolean) => {
					this.displayModal = displayModal;
				}
			})
		);
	}

	public ngOnInit() {}

	public ngOnDestroy() {
		this.suscriptions.forEach(x => x.unsubscribe());
	}
}
