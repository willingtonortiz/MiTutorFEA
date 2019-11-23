import { AbstractControl } from '@angular/forms'

export function capacityValidator(
	control: AbstractControl
): { [key: string]: any } | null {


	if (+control.value > 5) {
		return { invalidNumber: { valid: false, value: control.value } };
	}
}


export function courseValidator(
	control: AbstractControl
): { [key: string]: any } | null {



	if (control.value == 0) {
		return { invalidNumber: { valid: false, value: control.value } };
	}
}
