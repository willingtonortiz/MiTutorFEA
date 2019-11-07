import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class ModalManagerService {
	private _modalCodeSubject: BehaviorSubject<number>;
	private _modalCodeObservable: Observable<number>;

	private _displayModalSubject: BehaviorSubject<boolean>;
	private _displayModalObservable: Observable<boolean>;

	constructor() {
		this._modalCodeSubject = new BehaviorSubject<number>(1);
		this._modalCodeObservable = this._modalCodeSubject.asObservable();

		this._displayModalSubject = new BehaviorSubject<boolean>(false);
		this._displayModalObservable = this._displayModalSubject.asObservable();
	}

	public openModal(): void {
		this._displayModalSubject.next(true);
	}

	public closeModal(): void {
		this._displayModalSubject.next(false);
	}

	public setModalCode(modalCode: number): void {
		this._modalCodeSubject.next(modalCode);
	}

	public setDisplayModal(modalDisplay: boolean): void {
		this._displayModalSubject.next(modalDisplay);
	}

	get modalCodeValue(): number {
		return this._modalCodeSubject.value;
	}
	get modalCodeObservable(): Observable<number> {
		return this._modalCodeObservable;
	}
	get displayModal(): boolean {
		return this._displayModalSubject.value;
	}
	get displayModalObservable(): Observable<boolean> {
		return this._displayModalObservable;
	}
}
