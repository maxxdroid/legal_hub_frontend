import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { DocumentService } from '../../services/documents_service/document.service';
import { FormsModule } from '@angular/forms';
import { legalDocument, legalDocuments } from '../../interface/type';

@Component({
  selector: 'app-upload',
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  selectedFile: File | null = null;
  selectedFileName: string = 'No file selected';
  title: string = '';
  author: string = '';
  description: string = '';

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
