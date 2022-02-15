import { AbstractControl } from "@angular/forms";

export function KontaktFormValidator(group: AbstractControl):{[key:string]:any} | null{
  // console.log("detta: " +group.pristine + " "+ group.valid);
  return group.pristine ? null : {'validateKontaktForm': group.value};
}
