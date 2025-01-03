import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { DocumentService } from '../../services/documents_service/document.service';
import { FormsModule } from '@angular/forms';
import { DocResponse, legalDocument, legalDocuments } from '../../interface/type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  selectedFile: File | null = null;
  selectedFileName: string = 'No file selected';
  title: string = '';
  author: string = '';
  description: string = '';


  isUploading: boolean = false;
  uploadProgress: string = '';

  documents: legalDocument[] = [];
  
  constructor(
    private documentService: DocumentService
  ) { }

  ngOnInit() {
    this.documentService.getDocuments({
      page: 1, limit: 10,
      perPage: 0
    }).subscribe((document: legalDocuments) => {
      console.log(document);
      this.documents = document.data;
    });
  }

  onSubmit(): void {
    if (!this.selectedFile || !this.title || !this.author || !this.description) {
      alert('Please fill in all fields and select a file!');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('title', this.title);
    formData.append('author', this.author);
    formData.append('description', this.description);
    formData.append('category', 'legal');

    this.isUploading = true;
    this.uploadProgress = 'Uploading...';

    this.documentService.postDocument(formData).subscribe({
      next: (document: DocResponse) => {
        this.documents.push(document.data);
        this.uploadProgress = 'Upload successful!';
      },
      error: () => {
        this.uploadProgress = 'Upload failed. Please try again.';
      },
      complete: () => {
        this.isUploading = false;
        this.selectedFile = null;
        this.selectedFileName = 'No file selected';
        this.title = '';
        this.author = '';
        this.description = '';
      }
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.selectedFileName = file.name;
    } else {
      this.selectedFileName = 'No file selected';
    }
  }

}
