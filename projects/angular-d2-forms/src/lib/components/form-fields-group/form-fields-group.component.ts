import { Component, Input, OnChanges } from '@angular/core';
import { FormFieldConfig, FormFieldsGroupConfig, includesInFieldPaths } from '../../form';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ad2forms-form-fields-group',
  templateUrl: './form-fields-group.component.html',
  styleUrls: ['./form-fields-group.component.css'],
})
export class FormFieldsGroupComponent implements OnChanges {
  @Input() config: FormFieldsGroupConfig<any>;
  @Input() hiddenFormFields: Observable<string[]>;
  _formFields$: Observable<FormFieldConfig<any>[]>;

  ngOnChanges() {
    this._formFields$ = combineLatest([
      of(this.config.fields),
      this.hiddenFormFields,
    ]).pipe(
      map(([formFields, hiddenFormFields]) =>
        formFields.filter(field => !includesInFieldPaths(hiddenFormFields, field.fieldPathString))),
    );
  }

}
