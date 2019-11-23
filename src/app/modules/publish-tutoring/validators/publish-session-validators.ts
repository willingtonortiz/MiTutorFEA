import { AbstractControl } from '@angular/forms';

export function dateValidator(
	control: AbstractControl
): { [key: string]: any } | null {

	let dateString = control.value.split('-');
	let date: Date = new Date(dateString[0], dateString[1] - 1, dateString[2]);

	if (date < new Date()) {
		return { invalidDate: { valid: false, value: control.value } };
	}
}

export function priceValidator(
	control: AbstractControl
): { [key: string]: any } | null {

	let testPrice = +control.value;
	if (isNaN(testPrice)) {
		return { invalidPrice: { valid: false, value: control.value } };
	}
}

