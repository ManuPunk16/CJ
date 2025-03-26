import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    NgStyle,
    NgIf,
    NgFor,
    RouterLink
  ],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isMenuHidden = true;
  isTransparenciaOpen: boolean = false;
  isDatosPersonalesOpen: boolean = false;
  isPaeOpen: boolean = false;
  isComiteEticaOpen: boolean = false;

  comiteEticaItems = [
    { label: 'Comité de Ética', link: '' },
    { label: 'Integración', link: '' },
    { label: 'Lineamientos de los Comités de Ética', link: '' },
    { label: 'Código de Conducta', link: '' },
    { label: 'Actas, Bases, Programas y más...', link: '' },
    { label: 'Protocolo de Hostigamiento y Acoso sexual', link: '' },
    { label: 'Pronunciamiento CERO Tolerancia', link: '' },
    { label: 'Código de Ética', link: '' },
    { label: 'Código de Ética Versión Amigable', link: '' },
  ];

  transparenciaItems = [
    { label: 'Obligaciones de Transparencia', link: '' },
    { label: 'Solicitud de Información', link: '' },
    { label: 'Índice de Expedientes Reservados', link: '' },
    {
      label: 'Datos Personales',
      hasSubmenu: true,
      submenuItems: [
        { label: 'Aviso de Privacidad Integral', link: '' },
        { label: 'Aviso de Privacidad Simplificado', link: '' },
        { label: 'Documento de Seguridad 2024', link: '' }
      ]
    },
    {
      label: 'PAE',
      hasSubmenu: true,
      submenuItems: [
        { label: 'Evaluación de Diseño', link: '' }
      ]
    },
    { label: 'Lineamientos Comisión Estudios Jurídicos', link: '' },
    { label: 'Manual de Organización', link: '' },
  ];

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const menuToggle = document.getElementById('menu-toggle');

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        this.isMenuHidden = !this.isMenuHidden;
        this.cdr.detectChanges();
      });
    }
  }

  toggleTransparencia() {
    this.isTransparenciaOpen = !this.isTransparenciaOpen;
    if (!this.isTransparenciaOpen) {
      this.isDatosPersonalesOpen = false;
      this.isPaeOpen = false;
      this.cdr.detectChanges();
    }
    if (this.isTransparenciaOpen) {
      this.isComiteEticaOpen = false;
      this.cdr.detectChanges();
    }
  }

  toggleDatosPersonales() {
    this.isDatosPersonalesOpen = !this.isDatosPersonalesOpen;
    if (this.isDatosPersonalesOpen) {
      this.isPaeOpen = false;
      this.cdr.detectChanges();
    }
  }

  togglePae() {
    this.isPaeOpen = !this.isPaeOpen;
    if (this.isPaeOpen) {
      this.isDatosPersonalesOpen = false;
      this.cdr.detectChanges();
    }
  }

  toggleComiteEtica() {
    this.isComiteEticaOpen = !this.isComiteEticaOpen;
    if (this.isComiteEticaOpen) {
      this.isTransparenciaOpen = false;
      this.isDatosPersonalesOpen = false;
      this.isPaeOpen = false;
      this.cdr.detectChanges();
    }
  }

  isTransparenciaMobileOpen: boolean = false;
  isDatosPersonalesMobileOpen: boolean = false;
  isPaeMobileOpen: boolean = false;
  isComiteEticaMobileOpen: boolean = false;

  toggleTransparenciaMobile() {
    this.isTransparenciaMobileOpen = !this.isTransparenciaMobileOpen;
    if (!this.isTransparenciaMobileOpen) {
      this.isDatosPersonalesMobileOpen = false;
      this.isPaeMobileOpen = false;
      this.cdr.detectChanges();
    }
    if (this.isTransparenciaMobileOpen) {
      this.isComiteEticaMobileOpen = false;
      this.cdr.detectChanges();
    }
  }

  toggleDatosPersonalesMobile() {
    this.isDatosPersonalesMobileOpen = !this.isDatosPersonalesMobileOpen;
    if (this.isDatosPersonalesMobileOpen) {
      this.isPaeMobileOpen = false;
      this.cdr.detectChanges();
    }
  }

  togglePaeMobile() {
    this.isPaeMobileOpen = !this.isPaeMobileOpen;
    if (this.isPaeMobileOpen) {
      this.isDatosPersonalesMobileOpen = false;
      this.cdr.detectChanges();
    }
  }

  toggleComiteEticaMobile() {
    this.isComiteEticaMobileOpen = !this.isComiteEticaMobileOpen;
    if (this.isComiteEticaMobileOpen) {
      this.isTransparenciaMobileOpen = false;
      this.isDatosPersonalesMobileOpen = false;
      this.isPaeMobileOpen = false;
      this.cdr.detectChanges();
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    const target = event.target;
    if (!target.closest('.group') && !target.hasAttribute('data-close-transparencia')) {
      this.isTransparenciaOpen = false;
      this.isDatosPersonalesOpen = false;
      this.isPaeOpen = false;
      this.isComiteEticaOpen = false;
      this.cdr.detectChanges();
    }
  }
}
