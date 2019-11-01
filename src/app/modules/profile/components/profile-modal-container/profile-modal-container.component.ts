import { Component, OnInit } from "@angular/core";
import { ModalManagerService } from "../../services";
import { Subscription } from "rxjs";

@Component({
	selector: "app-profile-modal-container",
	templateUrl: "./profile-modal-container.component.html",
	styleUrls: ["./profile-modal-container.component.scss"]
})
export class ProfileModalContainerComponent implements OnInit {
	private _suscriptions: Array<Subscription>;

	public modalCode: number;

	constructor(private modalManagerService: ModalManagerService) {
		this._suscriptions = new Array<Subscription>();

		this._suscriptions.push(
			this.modalManagerService.modalCodeObservable.subscribe({
				next: (modalCode: number) => {
					this.modalCode = modalCode;
				},
				error: error => {
					console.log(error);
				}
			})
		);
	}

	ngOnInit() {}

	public closeModal(): void {
		this.modalManagerService.setDisplayModal(false);
	}
}
