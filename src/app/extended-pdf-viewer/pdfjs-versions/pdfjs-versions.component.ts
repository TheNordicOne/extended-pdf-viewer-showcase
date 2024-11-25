import { Component } from '@angular/core';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { isLocalhost } from '../common/utilities';

@Component({
standalone: false,
  selector: 'app-pdfjs-versions',
  templateUrl: './pdfjs-versions.component.html',
  styleUrls: ['./pdfjs-versions.component.css'],
})
export class PdfjsVersionsComponent {



  private _fullscreen = false;

  public get fullscreen(): boolean {
    return this._fullscreen;
  }

  public set fullscreen(full: boolean) {
    this._fullscreen = full;

  }

  constructor(private pdfService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }
}
