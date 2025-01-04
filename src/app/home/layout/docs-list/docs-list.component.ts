import { Component, Input } from '@angular/core';
import { legalDocument, legalDocuments } from '../../../interface/type';
import { DocumentService } from '../../../services/documents_service/document.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docs-list',
  imports: [CommonModule],
  templateUrl: './docs-list.component.html',
  styleUrl: './docs-list.component.css'
})
export class DocsListComponent {

  documents: legalDocument[] = [];
  @Input() title: string = '';

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

}
