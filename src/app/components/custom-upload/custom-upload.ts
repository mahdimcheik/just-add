import { Component, Input, forwardRef, signal, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-custom-upload-file',
  standalone: true,
  imports: [CommonModule, FileUploadModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomUpload),
      multi: true,
    },
  ],
  templateUrl: './custom-upload.html',
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class CustomUpload implements ControlValueAccessor, OnInit {
  // Input properties for file upload configuration
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() accept: string = '*';
  @Input() multiple: boolean = false;
  @Input() maxFileSize: number = 1000000;
  @Input() chooseLabel: string = 'Choisir';
  @Input() uploadLabel: string = 'Téléverser';
  @Input() cancelLabel: string = 'Annuler';
  @Input() emptyMessage: string = 'Sélectionnez et glissez vos fichiers ici';
  @Input() mode: 'basic' | 'advanced' = 'advanced';
  @Input() url: string = '';
  @Input() showUploadButton: boolean = true;
  @Input() showCancelButton: boolean = true;
  @Input() auto: boolean = false;
  @Input() invalid: boolean = false;

  // Internal state
  uploadedFiles = signal<File[]>([]);
  disabled = signal<boolean>(false);

  // ControlValueAccessor callbacks
  private onChange = (value: File | File[] | null) => {};
  private onTouched = () => {};

  ngOnInit() {
    // Initialize empty files array
    this.uploadedFiles.set([]);
  }

  // ControlValueAccessor implementation
  writeValue(value: File | File[] | null): void {
    if (value === null || value === undefined) {
      this.uploadedFiles.set([]);
    } else if (Array.isArray(value)) {
      this.uploadedFiles.set(value);
    } else {
      this.uploadedFiles.set([value]);
    }
  }

  registerOnChange(fn: (value: File | File[] | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  // File upload event handlers
  onUpload(event: any) {
    this.handleFileChange(event.files);
  }

  onSelect(event: any) {
    this.handleFileChange(event.files);
  }

  onRemove(event: any) {
    const currentFiles = this.uploadedFiles() ?? [];
    if (currentFiles.length > 0) {
      const updatedFiles = currentFiles.filter((file) => file !== event.file);
      this.handleFileChange(updatedFiles);
    } else {
      this.handleFileChange([]);
    }
  }

  onClear(event: any) {
    this.handleFileChange([]);
  }

  private handleFileChange(files: File[]) {
    this.uploadedFiles.set(files);
    this.onTouched();

    // Emit the appropriate value based on multiple flag
    if (this.multiple) {
      this.onChange(files.length > 0 ? files : null);
    } else {
      this.onChange(files.length > 0 ? files[0] : null);
    }
  }

  // Helper methods
  getFiles(): File[] {
    return this.uploadedFiles();
  }

  hasFiles(): boolean {
    return this.uploadedFiles().length > 0;
  }

  clearFiles(): void {
    this.handleFileChange([]);
  }
}
